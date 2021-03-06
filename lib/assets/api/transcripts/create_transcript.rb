# frozen_string_literal: true

require './lib/assets/nlp/nlp_handler'
require './lib/assets/search/search_handler'
require './lib/assets/platform/firestore'

def create_transcript(api_req, nlp_type, is_test_mode, is_word_only, is_concurrent, multiple_search)
  max_words_number = 3

  search_type = api_req[:search_type] || 0

  search_mode = if search_type.zero?
                  'image'
                elsif search_type == 1
                  'news'
                elsif search_type == 2
                  'video'
                else
                  'image'
                end

  is_concurrent = false if api_req[:UI_version] && api_req[:UI_version] == 'demo'

  text = api_req[:transcript]
  # user_id = User.find_by(facebook_id: api_req[:FacebookID]).id
  user_id = 'guest_x'
  wall_id = api_req[:wallID]
  langcode = api_req[:langcode]
  with_words = api_req[:with_words]

  entities_list, sentiment = nlp_handler(nlp_type, text, langcode, is_test_mode)

  transcript = Transcript.new(
    text:        text,
    wall_id:     wall_id,
    user_id:     user_id,
    has_content: false,
    is_visible:  true,
    langcode:    langcode,
    sentiment:   sentiment
  )
  transcript.save if is_concurrent

  entities_list.each {|entity_hash| entity = transcript.entities.build(category: entity_hash['category'], name: entity_hash['name']) }

  with_words.each {|word| with_word = transcript.with_words.build(text: word) if word.present?}

  if entities_list.length.zero?
    puts('no entities')
  else
    word_list = []
    limited_entities_list = transcript.entities.each_slice(max_words_number).to_a

    if multiple_search
      for limited_entities in limited_entities_list
        search = transcript.searches.new(mode: search_mode, is_visible: true)

        word = ''
        words = []

        for entity in limited_entities
          entity_search = search.entity_searches.build(:entity => entity)
          word += entity.name
          word += ' '
          words.push(entity.name)
        end

        for with_word in transcript.with_words
          with_word_search = search.with_word_searches.build(:with_word => with_word)
          word += with_word.text
          word += ' '
          words.push(with_word.text)
        end

        word_list.push(word)

        puts('search.entities')
        puts(search.entities)

        search.is_visible = false unless different_search?(search, limited_entities, with_words, 15)
        search.save if is_concurrent

        ## firestore
        index_search_firestore(wall_id, search, words)

      end

    else

      for entity in transcript.entities
        search = transcript.searches.build(mode: search_mode, is_visible: true)
        entity_search = search.entity_searches.build(entity: entity)

        word = ''
        words = []

        word += entity.name
        word += ' '
        words.push(entity.name)

        for with_word in transcript.with_words
          with_word_search = search.with_word_searches.build(with_word: with_word)
          word += with_word.text
          word += ' '
          words.push(with_word.text)
        end

        word_list.push(word)

        puts('search.entities')
        search.entity_searches.each { |entity_search| puts(entity_search.entity.attributes) }

        search.is_visible = false unless different_search?(search, entities_list, with_words, 15)
        search.save if is_concurrent

        ## firestore
        index_search_firestore(wall_id, search, words)

      end

    end

    # transcript.save if is_concurrent

    transcript.searches.length.times do |i|
      search = transcript.searches[i]

      next unless search.is_visible

      word = word_list[i]
      contents_list = search_handler(
        word,
        search,
        transcript,
        langcode,
        is_concurrent,
        is_word_only,
        search_type,
        is_test_mode
      )

      unless is_concurrent
        if contents_list.length.zero?
          ## ここにDBにhas_contentsをtrueにするように更新するのが理想か
          puts('no contents')
        else
          transcript.has_content = true
          for content in contents_list
            related_content = search.related_contents.build(
              transcript:   transcript,
              title:        content['title'],
              desc:         content['desc'],
              url:          content['url'],
              img_url:      content['img_url'],
              content_type: content['content_type'],
              source:       content['source'],
              is_visible:   true
            )

            condition = related_content.build_condition(
              service: content['condition']['service'],
              word: content['condition']['word']
            )

            ## firestore
          end
        end
      end
    end
  end

  transcript.save

  transcript
end

def different_search?(search, entities, with_words, num)
  current_words = []
  entities.each { |entity| current_words.push(entity['name']) }
  with_words.each { |with_word| current_words.push(with_word) }
  # entities.each {|entity| current_words.push(entity.name) }
  # with_words.each {|with_word| current_words.push(with_word.text) }

  past_searches = Search.joins(:transcript)
                    .where('transcripts.wall_id' => search.transcript.wall_id, 'searches.is_visible' => true)
                    .order('id DESC')[0...num]

  result = true if past_searches.blank?

  for past_search in past_searches
    next if search.id == past_search.id
    past_words = []
    past_search.entities.each { |entity| past_words.push(entity.name) }
    past_search.with_words.each { |with_word| past_words.push(with_word.text) if with_word.present? }
    result = false

    if current_words.length != past_words.length
      result = true
      next
    end

    for current_word in current_words
      unless past_words.include?(current_word)
        result = true
        break
      end
    end

    break unless result
  end
  result
end

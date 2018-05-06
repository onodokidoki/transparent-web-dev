Rails.application.routes.draw do
  devise_for :admin_users
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  root to: 'home#top'
  get '/dev',   to: 'home#index'

  get '/api/transcripts/:wall_id', to: 'api/transcripts#index'
  post '/api/transcripts', to: 'api/transcripts#create'
  get '/api/transcripts/:wall_id/:index', to: 'api/transcripts#show'

  get '/wall/:wall_id/en',   to: 'home#demo_en'
  get '/wall/:wall_id/ja',   to: 'home#demo_ja'

  get '/demo/en',   to: 'home#demo_sxsw_en'
  get '/demo/ja',   to: 'home#demo_sxsw_ja'

  get '/demo/ms',   to: 'home#demo_ms'
  get '/demo/google',   to: 'home#demo_google'

  get '/media',   to: 'home#media'

  post '/test',   to: 'home#post_transcript'

  # namespace :api, format: 'json' do
  #   resources :transcripts, only: [:index, :show, :create, :update]
  # end

end

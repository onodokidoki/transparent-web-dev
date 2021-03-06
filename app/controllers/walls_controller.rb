# frozen_string_literal: true

class WallsController < ApplicationController
  def create
    default_langcode = params[:default_langcode].to_i
    if !default_langcode.kind_of?(Integer)
      # render json: {'message' => 'Column "default_langcode" must be Integer.'}, status :bad_request
      render json: { 'message' => 'Column "default_langcode" must be Integer.' }
    elsif default_langcode > 1
      render json: { 'message' => 'Invalid value in Column "default_langcode".' }
    else
      name = params[:name]
      @wall = Wall.new(name: name, default_langcode: default_langcode)
      if @wall.save
        version = params[:version]
        @wall.url = 'https://trnspt.com/next100/wall/' + @wall.key if version == 'next100'
        @wall.save
        render json: @wall
      else
        puts('error')
        render json: @wall.errors, status: :unprocessable_entity
      end
    end
  end
end

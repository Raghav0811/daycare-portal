module Api
  module V1
    class DayhomesController < ApplicationController
      def index
        @dayhomes = Dayhome.all
        render json: @dayhomes
      end
    end
  end
end

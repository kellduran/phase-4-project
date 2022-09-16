class PetSittersController < ApplicationController

    #GET "/pet_sitters"
    def index
        render json: PetSitter.all, status: :ok
    end

    def create
        ps = PetSitter.create!(pet_sitter_params)
        render json: ps, status: :created
    end


    private

    def pet_sitter_params
        params.permit(:name, :description, :image, :rating)
    end

end

class PetsController < ApplicationController
    skip_before_action :authenticate_user ##this allows testing in postman ect without auth

    def show 
        pets = PetOwner.find(params[:id]).pets
        render json: pets, status: :ok
    end

    def create 
        pet= Pet.create!(pet_params)
        render json: pet, status: :created
    end

    private

    def pet_params
        params.permit(:name, :animal, :breed, :age, :size, :pet_owner_id, :image)
    end
end

class PetsController < ApplicationController
    skip_before_action :authenticate_user ##this allows testing in postman ect without auth

    def show 
        pets = pet_owner_find.pets
        render json: pets, status: :ok
    end

    def create 
        pet = Pet.create!(pet_params)
        render json: pet, status: :created
    end

    def update
        pet = Pet.find(params[:id])
        pet.update!(pet_params)
        render json: pet, status: :ok
    end

    def destroy 
        pet = Pet.find(params[:id])
        pet.destroy
        head :no_content
    end

    private

    def pet_owner_find
        PetOwner.find(params[:id])
    end

    def pet_params
        params.permit(:name, :animal, :breed, :age, :size, :pet_owner_id, :image)
    end
end

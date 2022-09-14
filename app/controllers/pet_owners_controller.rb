class PetOwnersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    #POST "/signup"
    def create
        user = PetOwner.create!(pet_owner_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    private
    
    def pet_owner_params
        params.permit(:username, :password, :password_confirmation, :name, :address)
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity 
    end
end

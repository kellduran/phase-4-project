class PetOwnersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    skip_before_action :authenticate_user, only: [:create]

    #POST "/signup"
    def create
        user = PetOwner.create!(pet_owner_params)
        session[:pet_owner_id] = user.id
        render json: user, status: :created
    end

    #GET "/pet_owners"
    def index
        render json: PetOwner.all
    end

    #GET "/me"
    def show
        if current_user 
            render json: current_user, status: :ok 
        else 
            render json: "No current session stored", status: :unauthorized
        end
    end

    private
    
    def pet_owner_params
        params.permit(:username, :password, :password_confirmation, :name, :address)
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity 
    end
end

class SessionsController < ApplicationController

    skip_before_action :authenticate_user, only: [:create]

    #POST "/login"
    def create
        user = PetOwner.find_by(username: params[:username])
        if user&.authenticate(params[:password])
          session[:pet_owner_id] = user.id
          render json: user, status: :ok
        else
          render json: "Invalid Credentials", status: :unauthorized
        end
    end

    #DELETE "/logout"
    def destroy
        session.delete :pet_owner_id
    end

end

class PetSittersController < ApplicationController

    #GET "/pet_sitters"
    def index
        render json: PetSitter.all, status: :ok
    end

end

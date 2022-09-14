class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response


  def current_user
    PetOwner.find_by(id: session[:user_id])
  end

end

class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  before_action :authenticate_user






  private


  def current_user
    @current_user ||= PetOwner.find_by(id: session[:pet_owner_id])
  end


  def authenticate_user
    return render json: { error: "Not authorized" }, stauts: :unauthorized unless current_user
  end


  def render_unprocessable_entity(invalid)
      render json: {errors: invalid.record.errors}, status: :unprocessable_entity
  end 

  def render_not_found(error)
      render json: {errors: {error.model => "Not Found"}}, status: :not_found
  end


end

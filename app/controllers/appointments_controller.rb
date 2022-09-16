class AppointmentsController < ApplicationController

    def show
        appt = pet_owner_find.appointments
        render json: appt, status: :ok
    end

    def create
        appt = Appointment.create!(appointment_params)
        render json: appt, status: :created
    end

    private

    def appointment_params
        params.permit(:date, :service, :time, :pet_name, :pet_owner_id, :pet_sitter_id)
    end

    def pet_owner_find
        PetOwner.find(params[:id])
    end

end

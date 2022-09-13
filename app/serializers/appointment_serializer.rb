class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date, :service, :time, :pet_name
  has_one :pet_owner
  has_one :pet_sitter
end

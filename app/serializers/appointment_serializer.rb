class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date, :service, :pet_name, :price, :time, :price
  has_one :pet_owner
  has_one :pet_sitter
end

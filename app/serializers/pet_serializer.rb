class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :type, :breed, :age, :size
  has_one :pet_owner
end

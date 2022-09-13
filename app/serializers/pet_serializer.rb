class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :animal, :breed, :age, :size, :image
  has_one :pet_owner
end

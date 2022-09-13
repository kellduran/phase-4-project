class PetSitterSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :rating
end

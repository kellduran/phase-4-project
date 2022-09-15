class PetOwnerSerializer < ActiveModel::Serializer
  attributes  :name, :address, :username, :id
end

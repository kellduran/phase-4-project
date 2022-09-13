class PetOwner < ApplicationRecord
    has_many :pets 
    has_many :appointments
    has_many :pet_sitters, through: :appointments
end

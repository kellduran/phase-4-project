class PetOwner < ApplicationRecord
has_secure_password

    has_many :pets 
    has_many :appointments
    has_many :pet_sitters, through: :appointments
end

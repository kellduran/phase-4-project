class PetSitter < ApplicationRecord
   has_many :appointments 
   has_many :pet_owners, through: :appointments 

end

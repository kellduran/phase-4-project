class Pet < ApplicationRecord
  belongs_to :pet_owner

  has_many :appointments, through: :pet_owner
end

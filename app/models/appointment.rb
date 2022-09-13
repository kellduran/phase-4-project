class Appointment < ApplicationRecord
  belongs_to :pet_owner
  belongs_to :pet_sitter

  has_many :pets, through: :pet_owners
end

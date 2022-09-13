class Appointment < ApplicationRecord
  belongs_to :pet_owner
  belongs_to :pet_sitter
end

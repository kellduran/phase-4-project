class CreatePetOwners < ActiveRecord::Migration[6.1]
  def change
    create_table :pet_owners do |t|
      t.string :name
      t.string :address
      t.string :username
      t.string :password_digest

      t.timestamps
    end
  end
end

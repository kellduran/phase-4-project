class CreatePetSitters < ActiveRecord::Migration[6.1]
  def change
    create_table :pet_sitters do |t|
      t.string :name
      t.text :description
      t.string :image
      t.integer :rating

      t.timestamps
    end
  end
end

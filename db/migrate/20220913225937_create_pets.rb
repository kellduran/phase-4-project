class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :animal
      t.string :breed
      t.integer :age
      t.string :size
      t.belongs_to :pet_owner, null: false, foreign_key: true
      t.string :image

      t.timestamps
    end
  end
end

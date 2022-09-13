class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :type
      t.string :breed
      t.string :age
      t.string :size
      t.string :image
      t.belongs_to :pet_owner, null: false, foreign_key: true

      t.timestamps
    end
  end
end

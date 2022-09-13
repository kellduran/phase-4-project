class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.date :date
      t.string :service
      t.string :time
      t.string :pet_name
      t.belongs_to :pet_owner, null: false, foreign_key: true
      t.belongs_to :pet_sitter, null: false, foreign_key: true

      t.timestamps
    end
  end
end

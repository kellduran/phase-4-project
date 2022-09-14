class AddUsernameToPetOwners < ActiveRecord::Migration[6.1]
  def change
    add_column :pet_owners, :username, :string
  end
end

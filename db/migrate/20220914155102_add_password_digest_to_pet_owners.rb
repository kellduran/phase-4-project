class AddPasswordDigestToPetOwners < ActiveRecord::Migration[6.1]
  def change
    add_column :pet_owners, :password_digest, :string
  end
end

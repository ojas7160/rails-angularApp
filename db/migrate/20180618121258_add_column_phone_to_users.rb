class AddColumnPhoneToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :phone, :number
  end
end

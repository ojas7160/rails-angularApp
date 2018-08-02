class AddColumnToVotes < ActiveRecord::Migration[5.2]
  def change
    add_column :votes, :resource_id, :integer
    add_column :votes, :resource_type, :string
  end
end

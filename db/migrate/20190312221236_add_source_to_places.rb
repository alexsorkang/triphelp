class AddSourceToPlaces < ActiveRecord::Migration[5.2]
  def change
    add_column :places, :source, :string, default: "custom"
  end
end

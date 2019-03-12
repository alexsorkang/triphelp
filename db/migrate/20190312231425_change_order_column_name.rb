class ChangeOrderColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :itineraries, :sections, :section_order
    rename_column :sections, :places, :place_order
  end
end

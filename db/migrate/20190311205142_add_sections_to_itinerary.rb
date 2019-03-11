class AddSectionsToItinerary < ActiveRecord::Migration[5.2]
  def change
    add_column :itineraries, :sections, :text, array: true, default: []
  end
end

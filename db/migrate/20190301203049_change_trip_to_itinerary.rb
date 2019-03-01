class ChangeTripToItinerary < ActiveRecord::Migration[5.2]
  def change
    rename_table :trips, :itineraries
  end
end

class CreateSections < ActiveRecord::Migration[5.2]
  def change
    create_table :sections do |t|
      t.string :name
      t.text :places, array: true, default: []
      t.references :itinerary
      t.timestamps
    end
    create_table :places do |t|
      t.string :name
      t.text :metadata
      t.references :section
      t.timestamps
    end
  end
end

class Itinerary < ApplicationRecord
  belongs_to :user
  has_many :sections

  def self.itinerary_json(itinerary_id)
    itinerary = joins(sections: :places).select(:name, :id, :section_order).where(id: itinerary_id).first
    response = itinerary.as_json
    sections = []
    itinerary.sections.find(itinerary.section_order).each do |section|
      places = []
      conv = section.as_json
      section.places.find(section.place_order).each do |place|
        places.push(place)
      end
      conv['places'] = places
      sections.push(conv)
    end
    response['sections'] = sections
    response.to_json
  end
end

class Section < ApplicationRecord
  belongs_to :itinerary
  has_many :places
end

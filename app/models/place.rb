class Place < ApplicationRecord
  belongs_to :section
  serialize :metadata, Hash
end

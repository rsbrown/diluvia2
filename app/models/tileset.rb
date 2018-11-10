class Tileset < ApplicationRecord
  has_one_attached :tileset_data
  has_one_attached :tilemap
end

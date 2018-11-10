class Tilemap < ApplicationRecord
  has_one_attached :tilemap_data
  has_one_attached :tileset
end

class CreateTilesets < ActiveRecord::Migration[5.2]
  def change
    create_table :tilesets do |t|
      t.string :name
      t.string :uuid
    end
  end
end

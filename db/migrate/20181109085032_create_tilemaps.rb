class CreateTilemaps < ActiveRecord::Migration[5.2]
  def change
    create_table :tilemaps do |t|
      t.string :name
      t.string :uuid
    end
  end
end

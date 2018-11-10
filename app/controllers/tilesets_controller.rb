class TilesetsController < ApplicationController
  def new
    @tileset = Tileset.new
  end

  def create
    @tileset = Tileset.new(tileset_params)
    if @tileset.save
      redirect_to root_path
    else
      render :new
    end
  end

  private
  def tileset_params
    params.require(:tileset).permit(:name, :tileset_data, :tilemap)
  end
end

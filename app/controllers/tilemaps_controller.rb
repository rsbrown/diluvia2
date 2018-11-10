class TilemapsController < ApplicationController
  def new
    @tilemap = Tilemap.new
  end

  def create
    @tilemap = Tilemap.new(tilemap_params)
    if @tilemap.save
      redirect_to root_path
    else
      render :new
    end
  end

  private
  def tilemap_params
    params.require(:tilemap).permit(:name, :tilemap_data, :tileset)
  end
end

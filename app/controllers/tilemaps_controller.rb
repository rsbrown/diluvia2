class TilemapsController < ApplicationController

  layout 'admin'

  def index
    @tilemaps = Tilemap.all
  end

  def new
    @tilemap = Tilemap.new
  end

  def edit
    @tilemap = Tilemap.find(params[:id])
  end

  def create
    @tilemap = Tilemap.new(tilemap_params)
    if @tilemap.save
      redirect_to root_path
    else
      render :new
    end
  end

  def update
    @tilemap = Tilemap.find(params[:id])
    if @tilemap.update_attributes(tilemap_params)
      redirect_to tilemaps_path
    else
      render :edit
    end
  end

  def destroy 
    @tilemap = Tilemap.find(params[:id])
    redirect_to tilemaps_path
  end

  private
  def tilemap_params
    params.require(:tilemap).permit(:name, :tilemap_data, :tileset)
  end
end

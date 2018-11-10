class HomeController < ApplicationController

  def index
    @tilemap = Tilemap.last
    redirect_to('/upload', flash: { alert: "No tilemaps. Please upload one." }) if @tilemap.nil?
  end

end

class HomeController < ApplicationController

  def index
    @tileset = Tileset.last
    redirect_to('/upload', flash: { alert: "No tilesets. Please upload one." }) if @tileset.nil?
  end

end

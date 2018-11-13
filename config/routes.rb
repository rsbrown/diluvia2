Rails.application.routes.draw do
  root 'home#index'

  resources :tilemaps
  get '/upload', to: 'tilemaps#new'
end

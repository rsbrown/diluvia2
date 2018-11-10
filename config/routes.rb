Rails.application.routes.draw do
  root 'home#index'
  resources :tilesets

get '/upload', to: 'tilesets#new'
end

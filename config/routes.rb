Rails.application.routes.draw do
  
  resources :pets
  resources :appointments
  resources :pet_sitters
  resources :pet_owners
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


  #routes to signup & stay logged in & Login & Logout
  post "/signup", to: "pet_owners#create"

  get "/me", to: "pet_owners#show"

  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"
end

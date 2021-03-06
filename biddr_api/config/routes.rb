Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :auctions
      resource :bids, only: [:create]
      resource :session, only: [:create, :destroy]
      resources :users, only: [:create] do
        get :current, on: :collection
        
      end
    end
  end
end

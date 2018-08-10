Rails.application.routes.draw do
  
  devise_for :users, controller: {
  	sessions: 'users/sessions',
  	registration: 'users/registrations'
  }
  authenticated :user do
    root to: 'home#landing'
  end
  unauthenticated do
    devise_scope :user do
      get '/', to: 'home#home'
    end
  end
  resources :posts

  devise_scope :user do
	  get 'login', to: 'users/sessions#new'
	  get 'signup', to: 'users/registrations#new'
    delete 'signout', to: 'users/sessions#destroy'
    delete '/users/sessions/destroy', to: 'users/sessions#destroy'
    post '/users/sessions/create', to: 'users/sessions#create'
	end

  namespace :api do
    namespace :v1 do
      resources :posts
      resources :votes
      resources :blogs
      resources :sessions do
        member do
          devise_scope :user do
            get :destroy
          end
        end
        collection do
          devise_scope :user do
            post :login
          end
        end
      end
      devise_scope :user do
        resources :registrations
      end
    end
  end

  resources :blogs

  resources :users do
    collection do
      get :currentUser
    end
  end

  get '/section1/*path' => 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

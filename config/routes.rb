Rails.application.routes.draw do
  
  root to: 'posts#index'

  devise_for :users, controller: {
  	sessions: 'devise/sessions',
  	registration: 'devise/registration'
  }

	get 'users/index'
  devise_for :models
  resources :posts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

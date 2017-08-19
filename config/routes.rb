Rails.application.routes.draw do
  mount AuthProvider::Engine => '/oauth'

  root to: 'pages#index'
  get :me, to: 'pages#me'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

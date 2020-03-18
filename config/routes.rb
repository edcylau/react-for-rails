Rails.application.routes.draw do
  root to: 'pages#index'
  get '/about', to: 'pages#index'
  get '/contact', to: 'pages#index'
  get '/project', to: 'pages#index'
  get '/resume', to: 'pages#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

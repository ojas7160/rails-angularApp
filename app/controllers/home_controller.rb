class HomeController < ApplicationController

	def landing
		redirect_to '/posts'
	end

	def home
		redirect_to '/login'
	end
end
class HomeController < ApplicationController

	def landing
		redirect_to '/posts'
	end

	def home
		# redirect_to '/login'
	end

	def index
		render :layout => "application"
	end
end
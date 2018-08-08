class HomeController < ApplicationController

	def landing
		redirect_to '/bloganaire'
	end

	def home
		# redirect_to '/login'
	end

	def index
		render :layout => "application"
	end
end
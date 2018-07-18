class ApplicationController < ActionController::Base
	skip_before_action :verify_authenticity_token
	before_action :authenticate_user!


	def authorized
		if current_user.nil?
			redirect_to "/login"
			flash[:notice] = "Login first" 
		end
	end
end

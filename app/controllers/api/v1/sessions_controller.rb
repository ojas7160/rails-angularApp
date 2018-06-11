class Api::V1::SessionsController < ApplicationController

	def destroy_user
		p params[:token]
		p '================'
		@token = params[:token]
		if @token.present?
			if @token.destroy
				render json: {success: true, message: 'User logged out'}
			else
				render json: {success: false}
			end
		end
	end

	def login_user
		
	end
end
class Api::V1::SessionsController < Devise::SessionsController

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

	def destroy
		signed_out = (Devise.sign_out_all_scopes ? sign_out : sign_out(current_user))
		if signed_out
			render json: {data: signed_out, success: true}
		else
			render json: {success: false}
		end
	end
end
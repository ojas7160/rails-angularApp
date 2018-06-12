class Api::V1::SessionsController < Devise::SessionsController
	protect_from_forgery with: :null_session
	skip_before_action :verify_authenticity_token

	def login
		p params[:user][:email]
		if !!params[:user][:email]
			user = User.find_by_email(params[:user][:email])
			if user.present?
				if user.valid_password?(params[:user][:password])
					sign_in(:user, user)
					if sign_in(user)
						render json: {message: 'Login successfully.', success: true}
					end
				else
					render json: {message: 'Invalid login details.', success: false}
				end
			else
				render json: {message: 'No user found with this credentials.', success: false}
			end
		else
			render json: {message: 'Empty Credentials.', success: false}
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

	private
		def login_params

		end
end
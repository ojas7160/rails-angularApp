class Api::V1::RegistrationsController < Devise::RegistrationsController
	protect_from_forgery with: :null_session
	skip_before_action :verify_authenticity_token

	def create
		p dummy_params[:password]
		p '=================='
		p dummy_params[:confirm_password]
		if !(dummy_params[:password].eql? dummy_params[:confirm_password])
			render json: {message: 'Enter password properly', success: false}
		else
			if(dummy_params[:password].length >= 8)
				@user = User.find_by_email(dummy_params[:email])
				if @user.blank?
					@new_user = User.create(email: dummy_params[:email], password: dummy_params[:password])
					if @new_user.save
						sign_up(@new_user)
						render json: {message: 'User successfully signed up', success: true}
					else
						render json: {message: 'Something went wrong', success: false}
					end
				else
					render json: {message: 'User already exists, try login', success: false}
				end
			else
				render json: {message: 'Password must be 8 charater long atleast', success: false}
			end
		end
	end

	private
		def dummy_params
			params.require(:user).permit(:email, :password, :confirm_password)
		end
end
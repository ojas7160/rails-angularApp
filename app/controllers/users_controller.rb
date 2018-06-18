class UsersController < ApplicationController
	# before_action :set_user
	def index
		@users = User.all
	end

	def show
		@user = User.find(params[:id])
		@posts = Post.where(user_id: @user.id)
	end

	def edit
		@user = User.find(params[:id])
		@posts = Post.where(user_id: @user.id)
	end

	def update
		@user = User.find(params[:id])
		@user.update_attributes(user_params)
		if @user.update
			render json: {data: @user, success: true}
		else
			render json: {message: 'Something went wrong', success: false}
		end
	end

	def destroy
		@user = User.find(params[:id])
		@user.destroy
	end

	private
		def set_user
			@user = current_user
		end
end
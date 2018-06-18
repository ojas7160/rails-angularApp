class Api::V1::PostsController < ApplicationController

	def create
		@post = Post.create(post_params)
		if @post.save
			render json: {data: @post, success: true}
		else
			render json: {success: false}
		end
	end

	private
		def post_params
			params.require(:post).permit(:title, :description).merge(user_id: current_user.id)
		end
end
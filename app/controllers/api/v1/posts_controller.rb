class Api::V1::PostsController < ApplicationController

	def index
		@posts = Post.all
		render json: {data: @posts, success: true}
	end

	def new
	end

	def create
		@post = Post.create(post_params)
		if @post.save
			render json: {data: @post, success: true}
		else
			render json: {success: false}
		end
	end

	def show
		@post = Post.find(params[:post_id])
		if @post.present?
			render json: {data: @post, success: true}
		else
			render json: {success: false}
		end
	end

	def edit
		@post = Post.find(params[:post_id])
		if @post.present?
			render json: {data: @post, success: true}
		else
			render json: {success: false}
		end
	end

	def update
		@post = Post.find(params[:post_id])
		@updated_post = @post.update_attributes(post_params)
		if @updated_post
			render json: {data: @updated_post, success: true}
		else
			render json: {success: false}
		end
	end

	def destroy
		@post = Post.find(params[:post_id])
		if @post.destroy
			render json: {success: true}
		else
			render json: {success: false}
		end
	end


	private
		def post_params
			params.require(:post).permit(:title, :description).merge(user_id: current_user.id)
		end
end

class Api::V1::PostsController < ApplicationController
	before_action :post, except: [:create, :new, :index]

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
		if @post.present?
			render json: {data: @post, success: true}
		else
			render json: {success: false}
		end
	end

	def edit
		p @post
		if @post.present?
			render json: {data: @post, success: true}
		else
			render json: {success: false}
		end
	end

	def update
		@updated_post = @post.update_attributes(post_params)
		if @updated_post
			render json: {data: @updated_post, success: true}
		else
			render json: {success: false}
		end
	end

	def destroy
		if @post.destroy
			render json: {success: true, message: 'Your Post has been deleted successfully.'}
		else
			render json: {success: false}
		end
	end


	private
		def post_params
			params.require(:post).permit(:title, :description).merge(user_id: current_user.id)
		end

		def post
			@post = Post.friendly.find(params[:id])
			p @post
		end
end

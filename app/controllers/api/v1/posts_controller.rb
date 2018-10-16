class Api::V1::PostsController < ApplicationController
	before_action :post, except: [:create, :new, :index]

	def index
		@posts = Post.all
		render json: {data: ActiveModel::Serializer::CollectionSerializer.new(@posts, each_serializer: PostSerializer), success: true, currentUserId: current_user.id}
		# Spree::OrderSerializer.new(@order) for singular serializer
		# ActiveModel::Serializer::CollectionSerializer.new(@posts, each_serializer: PostSerializer) for collection serializer
	end

	def new
	end

	def create
		p params
		p '============='
		@post = Post.create(post_params)
		if @post.save
			render json: {data: @post, success: true}
		else
			render json: {success: false}
		end
	end

	def show
		@image = @post.image
		if @post.present?
			render json: {data: @post, success: true, image: @post.image}
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

	def find_users_who_did_vote
		if @post.present?
			@users = @post.votes.where(value: params[:value]).collect{|vote| vote.user}
			render json: {success: true, users: @users}
		else
			render json: {success: false}
		end
	end


	private
		def post_params
			params.require(:post).permit(:title, :description, :image).merge(user_id: current_user.id)
		end

		def post
			@post = Post.friendly.find(params[:id])
		end
end

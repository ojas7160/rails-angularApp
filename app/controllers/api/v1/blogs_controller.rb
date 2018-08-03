class Api::V1::BlogsController < ApplicationController
  before_action :set_blog, only: [:show, :destroy, :edit, :update]

  def index
    @blogs = Blog.all
    render json: {data: @blogs, success: true}
  end

  def new
  end

  def create
    @blog = Blog.new(blog_params)
    if @blog.save
      render json: {data: @blog, success: true}
    else
      render json: {success: false, message: 'Something went wrong'}
    end
  end

  def show
    if @blog.present?
      render json: {data: @blog, success: true}
    else
      render json: {success: false, message: 'No Blog'}
    end
  end

  def edit

  end

  def update
  end

  def destroy
  end

  private
    def set_blog
      @blog = Blog.find(params[:id])
    end

    def blog_params
      params.require(:blog).permit(:title, :description).merge(user_id: current_user.id)
    end
end
class Api::V1::VotesController < ApplicationController

  def create
    @vote = Vote.new(votes_params)
    if @vote.save
      render json: {data: @vote, success: true}
    else
      render json: {success: false, message: 'Something went wrong'}
    end
  end

  private
    def votes_params
      params.require(:vote).permit(:resource_id, :resource_type, :value).merge(user_id: current_user.id)
    end
end
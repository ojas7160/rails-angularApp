class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :slug, :likes, :dislikes
end
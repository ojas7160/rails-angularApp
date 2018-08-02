class Post < ApplicationRecord
	belongs_to :user
	has_many :votes, as: :resource

	extend FriendlyId
  friendly_id :title, use: [:slugged, :finders]

  has_attached_file :image,
		styles: { mini: '48x48>', small:'100x100>', thumb:'240x240>', large: '600x600>' },
		default_style: :post,
		url: '/posts/:id/:style/:basename.:extension',
		path: ':rails_root/public/post_images/posts/:id/:style/:basename.:extension',
		convert_options: { all:'-strip -auto-orient -colorspace sRGB' }
  validates_attachment :image,
    presence: true,
    content_type: { content_type: /\Aimage\/.*\Z/ } 
end

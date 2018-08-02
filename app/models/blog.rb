class Blog < ApplicationRecord
  has_many :votes, as: :resource
end

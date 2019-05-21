class Bid < ApplicationRecord

  belongs_to :user
  
  validates :bid_value, presence: true

end

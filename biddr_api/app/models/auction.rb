class Auction < ApplicationRecord
    belongs_to :user
    has_many :bids, dependent: :destroy

    validates(:title, presence: true)

    validates(
      :description,  presence: true 
    )
end

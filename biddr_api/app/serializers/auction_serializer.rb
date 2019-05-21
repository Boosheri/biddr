class AuctionSerializer < ActiveModel::Serializer
  attributes(
    :id, 
    :title, 
    :description, 
    :current_price,
    :reserve_price, 
    :ends_at, 
    :created_at, 
  )

  belongs_to(:user)
  has_many(:bids)

  class AnswerSerializer < ActiveModel::Serializer
    attributes :id, :bid_value

    belongs_to(:user)
  end

  def like_count
    # `object` is assigned the instance of the model
    # being serializer. User it where you would use `self`
    # in instance methods of the model's class.
    object.likes.count
  end
end

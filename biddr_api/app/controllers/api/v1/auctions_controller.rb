class Api::V1::AuctionsController < Api::ApplicationController
    before_action :authenticate_user!, only: [ :create ]
    before_action :find_auction, only: [ :show ]
  
    def index
      auctions = Auction.order(created_at: :desc)
  
      render(
        json: auctions,
      )
    end
  
    def show
      render(
        json: @auction,
        include: [ :user, {bids: [ :user ]} ]
      )
    end
  
    def create
      auction = Auction.new auction_params
      auction.user = current_user
  
      auction.save!
      render json: { id: auction.id }, status: 201
    end

    private

    def find_auction
      @auction ||= Auction.find params[:id]
    end
  
    def auction_params
      params.require(:auction).permit(:title, :description, :ends_at, :reserve_price)
    end
  
end

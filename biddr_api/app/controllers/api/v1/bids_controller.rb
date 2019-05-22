class Api::V1::BidsController < Api::ApplicationController

    def create
        # auction_id = params.id
        p '================================'
        p params["id"]
        p params["value"]
        p '================================'
        bid = Bid.new
        bid.bid_value = params["value"]
        bid.auction_id = params["id"]
        bid.user = current_user
    
        bid.save!
        bids = Bid.where(auction_id: params["id"]);
        render json: { bids: bids }, status: 201
      end

      private

      def bid_params
        params.require(:auction).permit(:bid_value)
      end
end

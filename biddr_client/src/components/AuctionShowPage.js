import React, { Component } from "react";
import { AuctionDetails } from "./AuctionDetails";
import { Auction } from "../api/auction";
import { Bid } from "../api/bid";
import BidList from "./BidList";
import { BidNew } from "./BidNew";

export class AuctionShowPage extends Component {
  constructor(props) {

    super(props);

    this.state = {
      auction: null,
      bids: []
    };
    
}

    createBid(params) {
        Bid.create(params).then( async (data) => {
            let auction = await Object.assign({}, this.state.auction);
            auction.bids = data;
            this.setState({ auction });
        // if (!data.errors) {
        //     this.props.history.push(`/auctions/${data.id}`);
        // } else {
        //     this.setState({
        //     errors: data.errors
        //     });
        // }
        });
    }

    componentDidMount() {

    const id = this.props.match.params.id;

    Auction.one(id).then(auction => {
      this.setState({
        auction
      });
    });
  }

  
  render() {
    if (!this.state.auction) {
      return (
        <main className="Page">
          <h2>Auction doesn't exist!</h2>
        </main>
      );
    };

    return (
      <div className="Page">
        <AuctionDetails {...this.state.auction} />
        <br />
        <BidNew
            onSubmit={params => this.createBid(params)}
            auctionId={this.state.auction.id}
        />
        <h3>Previous Bids</h3>
        <BidList
            auction={this.state.auction}
        />
      </div>
    );
  }
}

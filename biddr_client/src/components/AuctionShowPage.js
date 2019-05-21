import React, { Component } from "react";
// import { BidList } from "./BidList";
import { AuctionDetails } from "./AuctionDetails";
import { Auction } from "../api/auction";
import { Link } from "react-router-dom";

// To structure our application, we will create components
// that simulate the pages of web application. These are meant
// to replace the various pages rendered by the routes of our rails server.
export class AuctionShowPage extends Component {
  constructor(props) {
    // When using a constructor in a class-based
    // component, you must call the `Component` class'
    // constructor with `super` passing it the `props`.
    super(props);

    this.state = {
      auction: null
    };
  }

  componentDidMount() {
    // Components rendered by the <Route> component
    // are passed three props: history, location and match.

    // `match` holds a property that contains a URL's params.
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
    }

    return (
      <main className="Page">
        <AuctionDetails {...this.state.auction} />

        {/* <h2>Bids</h2>
        <BidList
        /> */}
      </main>
    );
  }
}

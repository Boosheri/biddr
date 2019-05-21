import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Auction } from "../api/auction";

export class AuctionIndexPage extends Component {
  state = {
    auctions: []
  };

  componentDidMount() {
    Auction.all().then(auctions => {
      this.setState({ auctions });
    });
  }

  render() {
    return (
      <main className="Page">
        <h2>Auctions</h2>
        <ul
          style={{
            listStyle: "none",
            paddingLeft: 0
          }}
        >
          {this.state.auctions.map(auction => (
            <li key={auction.id}>
              <Link to={`/auctions/${auction.id}`}>{auction.title}</Link>{" "}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

import React, { Component } from "react";
import { Auction } from "../api/auction";
import { AuctionForm } from "./AuctionForm";


export class AuctionNewPage extends Component {
    state = {
      errors: []
    };
  
    createAuction(params) {
      Auction.create(params).then(data => {
        if (!data.errors) {
          this.props.history.push(`/auctions/${data.id}`);
        } else {
          this.setState({
            errors: data.errors
          });
        }
      });
    }
  
    render() {
      return (
        <main className="Page">
          <h1>Start an Auction</h1>
  
          <AuctionForm
            errors={this.state.errors}
            onSubmit={params => this.createAuction(params)}
          />
        </main>
      );
    }
  }
  
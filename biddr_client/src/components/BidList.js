import React, { Component } from "react";
import BidDetails from "./BidDetails";

class BidList extends Component {
    constructor(props){
        super(props);
        this.state = {
            bids: []
        }
    };

    componentDidMount = () => {
        this.setState({ bids: this.props.auction.bids });
    };

    componentDidUpdate = (prevProps) => {
        if(this.props.auction !== prevProps.auction){
            this.setState({ bids: this.props.auction.bids });
        };
    };

    render = () => {
        return (
          
            <ul
              style={{
                listStyle: "none",
                paddingLeft: 0
              }}
            >
              {
                this.state.bids && this.state.bids.length ? this.state.bids.map(bid => (
                <li key={bid.id}>
                     <BidDetails 
                        value={bid.bid_value}
                        createdAt={bid.created_at}
                     />
                </li>
              )) : ''}
            </ul>
          );
    }
}

export default BidList;

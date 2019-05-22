
import React, { useState } from "react";
import { Bid } from "../api/bid";
// import { BidDetails } from "./BidDetails";


export const BidNew = props => {
  const { data = {}, errors = [], auctionId, onSubmit } = props;
  const [value, setValue] = useState(0);

  const handleSubmit = event => {
    event.preventDefault();
    let payload = {};
    payload.value = value;
    payload.id = auctionId;
    onSubmit(payload);
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Bid Value</label> <br />
        <input
            onChange={handleChange}
            name="bid_value"
            type="number"
            min="0"
            id="bid_value"
            value={value} />
      </div>
        <br />
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

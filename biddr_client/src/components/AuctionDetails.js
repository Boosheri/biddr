import React from "react";

export function AuctionDetails(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>
        {props.description}
        <br />
      </p>
      <p>
        Current Price: ${props.current_price}
        <br />
      </p>
      <p>
        Reserve Price: ${props.reserve_price}
        <br />
      </p>
      <p>
        Ends At: {props.ends_at}
        <br />
      </p>
      <p>
        <small>Created at: {props.created_at}</small>
      </p>
    </div>
  );
}

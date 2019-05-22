import { BASE_URL } from "../config";

export const Bid = {

  create(params) {
    console.log(params);
    return fetch(`${BASE_URL}/bids`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
};

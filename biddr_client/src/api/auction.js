import { BASE_URL } from "../config";

export const Auction = {
  all() {
    return fetch(`${BASE_URL}/auctions`, {
      credentials: "include"
    }).then(res => res.json());
  },
  async one(id) {
    const res = await fetch(`${BASE_URL}/auctions/${id}`, {
      credentials: "include"
    });
    const auction = await res.json();
    return auction;
  },
  create(params) {
    return fetch(`${BASE_URL}/auctions`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
};

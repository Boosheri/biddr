import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuctionIndexPage } from "./AuctionIndexPage";
import { AuctionShowPage } from "./AuctionShowPage";
import { WelcomePage } from "./WelcomePage";
import { NavBar } from "./NavBar";
import { User } from "../api/user";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      loading: true
    };
  }

  componentDidMount() {
    this.getCurrentUser();
  }

  getCurrentUser = () => {
    return User.current()
      .then(user => {
        if (user.id) {
          this.setState({ currentUser: user });
        }
        this.setState({ loading: false });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  };

  render() {
    if (this.state.loading) {
      return <div />;
    }

    return (
      <BrowserRouter>
        <div>
          <header>
            <NavBar
            />
          </header>

          <Switch>
            <Route exact path="/" component={WelcomePage} />

            <Route exact path="/auctions" component={AuctionIndexPage} />
            
            <Route exact path="/auctions/:id" component={AuctionShowPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export { App };

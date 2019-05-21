import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuctionIndexPage } from "./AuctionIndexPage";
import { AuctionShowPage } from "./AuctionShowPage";
import { WelcomePage } from "./WelcomePage";
import { NavBar } from "./NavBar";
import { User } from "../api/user";
import { SignInPage } from "./SignInPage";
import { AuthRoute } from "./AuthRoute";

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

  signOut = () => {
    // This method removes the current user from the react app, effectively
    // signing out the user
    this.setState({
      currentUser: null
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
              currentUser={this.state.currentUser}
              onSignOut={this.signOut}
            />
          </header>

          <Switch>
            <Route exact path="/" component={WelcomePage} />

            <Route exact path="/sign_in" render={routeProps => (
            <SignInPage {...routeProps} onSignIn={this.getCurrentUser} />
              )}
              />

            <Route exact path="/auctions" component={AuctionIndexPage} />
            
            <Route exact path="/auctions/:id" component={AuctionShowPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export { App };

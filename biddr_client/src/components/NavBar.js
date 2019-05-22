import React from 'react';
import { NavLink } from 'react-router-dom';
import { Session } from '../api/session';

export function NavBar(props) {
  const { currentUser, onSignOut } = props;
  function handleSignout() {
    Session.destroy().then(() => {
      onSignOut();
    });
  }
    return (
        <nav className="NavBar">
          <NavLink exact to="/">
            Welcome|
          </NavLink>
          
          <NavLink exact to="/auctions">
            Auctions|
          </NavLink>
          
          {currentUser ? (
        <React.Fragment>
          
          <span>Hello {currentUser.first_name}|</span>

          <NavLink exact to="/auctions/new">
            New Auction|
          </NavLink>
          
          <NavLink onClick={handleSignout} exact to="/">
            Sign Out
          </NavLink>
        </React.Fragment>
      ) : (
        <>
          <NavLink exact to="/sign_in">
            Sign In
          </NavLink>
        </>
      )}
    </nav>
  );
}

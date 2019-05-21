import React from "react"; // 'react'
import { Session } from "../api/session";

export function SignInPage(props) {
  const { onSignIn } = props;
  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const fD = new FormData(currentTarget);
    const signInParams = {
      email: fD.get("email"),
      password: fD.get("password")
    };
    Session.create(signInParams).then(response => {
      if (response.id) {
        onSignIn();
        props.history.push("/auctions");
      }
    });
}
return (
    <main>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label> <br />
                <input id="email" name="email" type="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label> <br />
                <input id="password" name="password" type="password" />
            </div>
        <input type="submit" value="Sign in!" />
        </form>
    </main>
);
}

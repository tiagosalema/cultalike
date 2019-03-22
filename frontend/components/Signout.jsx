import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "./User";
import Router from "next/router";

const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    signout {
      message
    }
  }
`;
class Signout extends Component {
  handleSignout = signout => {
    signout();
  };
  render() {
    return (
      <Mutation
        mutation={SIGNOUT_MUTATION}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {signout => (
          <button
            className="btn"
            style={{ margin: "0 0 0 0" }}
            onClick={() => {
              Router.push("/");
              signout();
            }}
          >
            Sign Out
          </button>
        )}
      </Mutation>
    );
  }
}

export default Signout;

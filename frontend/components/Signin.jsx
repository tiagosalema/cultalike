import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import { CURRENT_USER_QUERY } from "./User";

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $name, password: $password) {
      id
      name
      email
      password
      permissions
    }
  }
`;

class Signin extends Component {
  state = {
    name: "",
    password: ""
  };

  render() {
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signin, { error, loading }) => {
          return (
            <Formik
              render={({ handleChange }) => {
                const { email, password } = this.state;
                return (
                  <Form onSubmit={signin}>
                    {error && <p>{error.message}</p>}
                    <h3>Sign in:</h3>
                    <Field
                      type="email"
                      onChange={e => {
                        handleChange(e);
                        this.setState({ [e.target.name]: e.target.value });
                      }}
                      value={email}
                      name="email"
                      placeholder="Email"
                    />
                    <Field
                      type="password"
                      onChange={e => {
                        handleChange(e);
                        this.setState({ [e.target.name]: e.target.value });
                      }}
                      value={password}
                      name="password"
                      placeholder="Password"
                    />
                    <button type="submit" onClick={signin} disabled={loading}>
                      Sign In
                    </button>
                  </Form>
                );
              }}
            />
          );
        }}
      </Mutation>
    );
  }
}

export default Signin;

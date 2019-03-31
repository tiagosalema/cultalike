import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import { CURRENT_USER_QUERY } from "./User";

const CREATE_USER_MUTATION = gql`
  mutation CREATE_USER_MUTATION($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      id
      name
      email
      password
      permissions
    }
  }
`;

class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  handleSignup = signup => {
    signup({ variables: this.state });
    this.setState({
      name: "",
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <Mutation
        mutation={CREATE_USER_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signup, { error, loading }) => {
          return (
            <Formik
              render={({ handleChange }) => {
                const { name, email, password } = this.state;
                return (
                  <Form onSubmit={() => this.handleSignup(signup)}>
                    {error && <p>{error.message}</p>}
                    <h3>Sign up:</h3>
                    <Field
                      type="text"
                      onChange={e => {
                        handleChange(e);
                        this.setState({ [e.target.name]: e.target.value });
                      }}
                      value={name}
                      name="name"
                      placeholder="Name"
                    />
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
                    <button
                      type="submit"
                      onClick={() => this.handleSignup(signup)}
                      disabled={loading}
                    >
                      Sign Up
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

export default Signup;

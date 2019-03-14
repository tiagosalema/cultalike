import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

const CREATE_USER_MUTATION = gql`
  mutation CREATE_USER_MUTATION(
    $name: String!
    $email: String!
    $password: String!
  ) {
    signup(name: $name, email: $email, password: $password) {
      id
      name
      email
      password
      permissions
    }
  }
`;

class SignupPage extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  render() {
    return (
      <Mutation mutation={CREATE_USER_MUTATION} variables={this.state}>
        {(signup, { error, loading }) => (
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: ""
            }}
            render={({ values: { name, email, password }, handleChange }) => (
              <Form onSubmit={signup}>
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
                <button type="submit" onClick={signup} disabled={loading}>
                  Sign Up
                </button>
              </Form>
            )}
          />
        )}
      </Mutation>
    );
  }
}

// const SignupPage = withFormik({
//   mapPropsToValues() {
//     return {
//       name: "",
//       email: "",
//       password: ""
//     };
//   },
//   handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
//     if (values.email === "...") {
//       setErrors({ email: "That email is already taken" });
//     } else {
//       resetForm();
//     }
//     setSubmitting(false);
//   }
// })(App);

export default SignupPage;

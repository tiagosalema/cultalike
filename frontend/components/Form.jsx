import React from "react";
// import { withFormik, Form, Field } from "formik";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
import { Component } from "react";

import { getMovies } from "../lib/fetchMovies";

import { ALL_MOVIES_QUERY } from "./ReviewedMovies";
import DisplaySearch from "./DisplaySearch";

const ADD_MOVIE_MUTATION = gql`
  mutation ADD_MOVIE_MUTATION($title: String!) {
    createMovie(data: { title: $title }) {
      id
      title
    }
  }
`;

class Form extends Component {
  state = {
    title: "",
    rate: "",
    movies: {}
  };

  componentDidMount() {
    getMovies()
      .then(({ results: movies }) => this.setState({ movies }))
      .catch(err => console.log(err));
  }

  handleSubmit = async (e, addMovie) => {
    e.preventDefault();
    const res = await addMovie({ variables: this.state });
  };

  handleChange = ({ target }) => {
    const { name, value, type } = target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  handleUpdate = (cache, payload) => {
    const data = cache.readQuery({ query: ALL_MOVIES_QUERY });
    data.movies.push(payload.data.createMovie);
    cache.writeQuery({ query: ALL_MOVIES_QUERY, data });
  };

  render() {
    return (
      <Mutation
        mutation={ADD_MOVIE_MUTATION}
        variables={this.state}
        update={this.handleUpdate}
        optimisticResponse={{
          __typename: "Mutation",
          createMovie: {
            __typename: "Movie",
            id: "cjswkyxg517bpski7cz119xvv",
            title: this.state.title
          }
        }}
      >
        {(addMovie, { loading, error }) => {
          const { movies, title, rate } = this.state;

          // if (loading) return <p>Loading...</p>;
          if (error) return <p>Error, my dude!!</p>;
          return (
            <React.Fragment>
              <form onSubmit={e => this.handleSubmit(e, addMovie)}>
                <input
                  list="suggestions"
                  autoComplete="off"
                  type="text"
                  name="title"
                  placeholder="Movie"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
                {movies.length && title.length ? (
                  <DisplaySearch movies={movies} />
                ) : null}
                <input
                  type="number"
                  name="rate"
                  placeholder="Rate"
                  value={rate}
                  onChange={this.handleChange}
                />
                <button disabled={loading} type="submit">
                  Add rate
                </button>
              </form>
            </React.Fragment>
          );
        }}
      </Mutation>
    );
  }
}

export default Form;

// const FormTemplate = ({ values, isSubmitting, handleSubmit }) => (
//   <Mutation mutation={ADD_MOVIE_MUTATION} variables={values}>
//     {(addMovie, payload) => {
//       return (
//         <form onSubmit={() => handleSubmit(addMovie)}>
//           <Field type="text" name="title" placeholder="Movie" />
//           <Field type="number" name="rate" placeholder="Rate" />
//           <button type="submit" disabled={isSubmitting}>
//             Add rate
//           </button>
//         </form>
//       );
//     }}
//   </Mutation>
// );

// const FormikApp = withFormik({
//   mapPropsToValues({ title, rate }) {
//     return {
//       title: title || "",
//       rate: rate || ""
//     };
//   },
//   handleSubmit(addMovie, values, { resetForm, setErrors, setSubmitting }) {
//     const res = addMovie({ variables: values });
//     console.log(res);

//     setTimeout(() => {
//       console.log(values);

//       if (values.title === "xxx") {
//         setErrors({ title: "Movie already exists" });
//       } else {
//         resetForm();
//       }
//       setSubmitting(false);
//     }, 500);
//   }
// })(FormTemplate);

// export default FormikApp;

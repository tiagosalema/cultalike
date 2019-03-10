import React from "react";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
import { Component } from "react";

import { getMovies } from "../lib/fetchMovies";

import { ALL_REVIEWED_MOVIES_QUERY } from "./ReviewedMovies";
import DisplaySearch from "./DisplaySearch";

const ADD_REVIEWED_MOVIE_MUTATION = gql`
  mutation ADD_REVIEWED_MOVIE_MUTATION($title: String!, $rate: Int!) {
    createRatedMovie(
      data: {
        movie: $title
        rater: { connect: { id: "cjsug50e1fv830b87zxjtijfs" } }
        rate: $rate
      }
    ) {
      id
      movie
      rate
      rater {
        name
      }
    }
  }
`;

class Form extends Component {
  state = {
    inputs: { title: "", rate: "" },
    movies: {}
  };

  componentDidMount() {
    getMovies()
      .then(({ results: movies }) => this.setState({ movies }))
      .catch(err => console.log(err));
  }

  handleSubmit = async (e, addRatedMovie) => {
    e.preventDefault();
    const res = await addRatedMovie({ variables: this.state.inputs });
  };

  handleChange = ({ target }) => {
    const { name, value, type } = target;
    const val = type === "number" ? parseFloat(value) : value;
    const inputs = { ...this.state.inputs, [name]: val };
    this.setState({ inputs });
  };

  handleUpdate = (cache, payload) => {
    const data = cache.readQuery({ query: ALL_REVIEWED_MOVIES_QUERY });
    data.ratedMovies.push(payload.data.createRatedMovie);
    cache.writeQuery({ query: ALL_REVIEWED_MOVIES_QUERY, data });
  };

  render() {
    const {
      movies,
      inputs: { title, rate }
    } = this.state;
    return (
      <Mutation
        mutation={ADD_REVIEWED_MOVIE_MUTATION}
        variables={this.state.input}
        update={this.handleUpdate}
        optimisticResponse={{
          __typename: "Mutation",
          createRatedMovie: {
            __typename: "RatedMovie",
            id: "cjswkyxg517bpski7cz119xvv",
            movie: title,
            rate: rate,
            rater: { __typename: "User", name: "tiago" }
          }
        }}
      >
        {(addRatedMovie, { loading, error }) => {
          // if (loading) return <p>Loading...</p>;
          if (error) return <p>Error, my dude!!</p>;
          return (
            <React.Fragment>
              <form onSubmit={e => this.handleSubmit(e, addRatedMovie)}>
                <input
                  list="suggestions"
                  autoComplete="off"
                  type="text"
                  name="title"
                  placeholder="Movie"
                  value={title}
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
                <button disabled={loading} type="submit" disabled={loading}>
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

// import { withFormik, Form, Field } from "formik";

// const FormTemplate = ({ values, isSubmitting, handleSubmit }) => (
//   <Mutation mutation={ADD_REVIEWED_MOVIE_MUTATION} variables={values}>
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

import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { Mutation } from "react-apollo";
import { Component } from "react";

import { getMovies } from "../lib/fetchMovies";

import { ALL_REVIEWED_MOVIES_QUERY } from "./ReviewedMovies";
import { CURRENT_USER_QUERY } from "./User";
import DisplaySearch from "./DisplaySearch";
import Button from "react-bootstrap/Button";

const ADD_REVIEWED_MOVIE_MUTATION = gql`
  mutation ADD_REVIEWED_MOVIE_MUTATION($title: String!, $raterId: ID!, $rate: Int!) {
    createRatedMovie(
      data: { movie: $title, rater: { connect: { id: $raterId } }, rate: $rate }
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

  handleSubmit = async (e, addRatedMovie, raterId) => {
    e.preventDefault();
    const variables = { ...this.state.inputs, raterId };
    await addRatedMovie({ variables });
  };

  handleChange = ({ target }) => {
    const { name, value, type } = target;
    const val = type === "number" ? parseFloat(value) : value;
    const inputs = { ...this.state.inputs, [name]: val };
    this.setState({ inputs });
  };

  handleUpdate = (cache, payload) => {
    console.log(payload);

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
      <Query query={CURRENT_USER_QUERY}>
        {({
          data: {
            me: { id: raterId, name: raterName }
          }
        }) => {
          return (
            <Mutation
              mutation={ADD_REVIEWED_MOVIE_MUTATION}
              variables={this.state.input}
              update={this.handleUpdate}
              optimisticResponse={{
                __typename: "Mutation",
                createRatedMovie: {
                  __typename: "RatedMovie",
                  id: "optimistic id",
                  movie: title,
                  rate,
                  rater: { __typename: "User", name: raterName }
                }
              }}
            >
              {(addRatedMovie, { loading, error }) => {
                if (error) return <p>Error, my dude!!</p>;
                return (
                  <form onSubmit={e => this.handleSubmit(e, addRatedMovie, raterId)}>
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
                    <button disabled={loading} type="submit">
                      Add rate
                    </button>
                    <Button bsStyle="warning">Bootstrap Button</Button>
                  </form>
                );
              }}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default Form;
export { ADD_REVIEWED_MOVIE_MUTATION };

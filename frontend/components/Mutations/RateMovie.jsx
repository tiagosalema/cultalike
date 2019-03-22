import React from "react";
import { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Mutation } from "react-apollo";

// Queries
import { CURRENT_USER_QUERY } from "../User";
import { ALL_REVIEWED_MOVIES_QUERY } from "../ReviewedMovies";

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

class RateMovie extends Component {
  handleSubmit = async (e, addRatedMovie, raterId) => {
    e.preventDefault();
    const variables = { ...this.props.inputs, raterId };
    await addRatedMovie({ variables });
  };

  handleUpdate = (cache, payload) => {
    const data = cache.readQuery({ query: ALL_REVIEWED_MOVIES_QUERY });
    data.ratedMovies.push(payload.data.createRatedMovie);
    cache.writeQuery({ query: ALL_REVIEWED_MOVIES_QUERY, data });
  };

  render() {
    const {
      inputs: { title, rate }
    } = this.props;
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
              variables={{ title, rate }}
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
              {(addRatedMovie, { error, loading }) => {
                if (error) return <p>Error, my dude!!</p>;
                return (
                  <form onSubmit={e => this.handleSubmit(e, addRatedMovie, raterId)}>
                    {React.Children.map(this.props.children, child =>
                      React.cloneElement(child, { loading })
                    )}
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

export default RateMovie;
export { ADD_REVIEWED_MOVIE_MUTATION };

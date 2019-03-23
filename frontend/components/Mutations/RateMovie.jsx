import React, { Component } from "react";
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";

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
        id
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
        {({ data: { me } }) => {
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
                  rater: {
                    __typename: "User",
                    id: me ? me.id : "",
                    name: me ? me.name : ""
                  }
                }
              }}
            >
              {(addRatedMovie, { error, loading }) => {
                if (error) return <p>Error, my dude!!</p>;
                if (!me) return null;
                return (
                  <form onSubmit={e => this.handleSubmit(e, addRatedMovie, me.id)}>
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

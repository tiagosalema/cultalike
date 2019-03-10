import { Component } from "react";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
import { ALL_REVIEWED_MOVIES_QUERY } from "./ReviewedMovies";

const DELETE_RATED_MOVIE_MUTATION = gql`
  mutation DELETE_RATED_MOVIE_MUTATION($id: ID!) {
    deleteRatedMovie(where: { id: $id }) {
      id
    }
  }
`;

class DeleteMovie extends Component {
  handleUpdate = (cache, payload) => {
    const data = cache.readQuery({ query: ALL_REVIEWED_MOVIES_QUERY });
    data.ratedMovies = data.ratedMovies.filter(
      ratedMovie => ratedMovie.id !== payload.data.deleteRatedMovie.id
    );
    cache.writeQuery({ query: ALL_REVIEWED_MOVIES_QUERY, data });
  };

  render() {
    return (
      <Mutation
        mutation={DELETE_RATED_MOVIE_MUTATION}
        variables={{ id: this.props.id }}
        update={this.handleUpdate}
        optimisticResponse={{
          __typename: "Mutation",
          deleteRatedMovie: {
            __typename: "RatedMovie",
            id: this.props.id
          }
        }}
      >
        {(deleteRatedMovie, { error }) => {
          if (error) return "Erro em DeleteMovie.jsx";
          return <button onClick={() => deleteRatedMovie()}>x</button>;
        }}
      </Mutation>
    );
  }
}

export default DeleteMovie;

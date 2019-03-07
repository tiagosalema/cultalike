import { Component } from "react";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
import { ALL_MOVIES_QUERY } from "./ReviewedMovies";

const DELETE_MOVIE_MUTATION = gql`
  mutation DELETE_MOVIE_MUTATION($id: ID!) {
    deleteMovie(where: { id: $id }) {
      id
    }
  }
`;

class DeleteMovie extends Component {
  handleUpdate = (cache, payload) => {
    const data = cache.readQuery({ query: ALL_MOVIES_QUERY });
    console.log(data, payload);

    data.movies = data.movies.filter(
      movie => movie.id !== payload.data.deleteMovie.id
    );
    cache.writeQuery({ query: ALL_MOVIES_QUERY, data });
  };

  render() {
    return (
      <Mutation
        mutation={DELETE_MOVIE_MUTATION}
        variables={{ id: this.props.id }}
        update={this.handleUpdate}
        optimisticResponse={{
          __typename: "Mutation",
          deleteMovie: {
            __typename: "Movie",
            id: this.props.id
          }
        }}
      >
        {(deleteMovie, { error }) => {
          if (error) return "Erro em DeleteMovie.jsx";
          return <button onClick={() => deleteMovie()}>x</button>;
        }}
      </Mutation>
    );
  }
}

export default DeleteMovie;

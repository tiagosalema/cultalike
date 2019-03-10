import { Component } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import styled from "styled-components";
import DeleteMovie from "./DeleteMovie";

const Table = styled.table`
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
`;

const ALL_MOVIES_QUERY = gql`
  query ALL_MOVIES_QUERY {
    movies {
      id
      title
    }
  }
`;
class ReviewedMovies extends Component {
  state = {
    movies: {}
  };
  componentDidMount() {
    const apiKey = process.env.API_KEY;
    const endpoint = "https://api.themoviedb.org/3/";
    const queries = "language=en-US" + "&page=1";

    fetch(`${endpoint}movie/popular?${apiKey}&${queries}`, {
      method: "get"
    })
      .then(res => res.json())
      .then(({ results }) => this.setState({ movies: results }))
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <Query query={ALL_MOVIES_QUERY}>
        {({ data, error, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error, my guy: {error.message}</p>;

          return (
            <Table>
              <thead>
                <tr>
                  <th>Movie</th>
                  <th>Rate</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.movies.map(movie => (
                  <tr key={movie.id}>
                    <td>{movie.title}</td>
                    <td>10</td>
                    <td>
                      <DeleteMovie id={movie.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          );
        }}
      </Query>
    );
  }
}

export default ReviewedMovies;
export { ALL_MOVIES_QUERY };

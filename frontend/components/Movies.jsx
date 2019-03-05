import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import styled from "styled-components";

const Table = styled.table`
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
`;

const GET_MOVIES_QUERY = gql`
  query GET_MOVIES_QUERY {
    movies {
      id
      title
    }
  }
`;

const Movies = () => (
  <Query query={GET_MOVIES_QUERY}>
    {({ data, error, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error, my guy: {error.message}</p>;
      return (
        <Table>
          <thead>
            <tr>
              <th>Movie</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {data.movies.map(movie => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>10</td>
              </tr>
            ))}
          </tbody>
        </Table>
      );
    }}
  </Query>
);

export default Movies;

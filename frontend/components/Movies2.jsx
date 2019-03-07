import { Component } from "react";
import styled from "styled-components";
const imgSize = 300;

const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
`;

class Movies extends Component {
  state = {
    movies: {}
  };

  componentDidMount() {
    const apiKey = process.env.API_KEY;
    const path = "https://api.themoviedb.org/3/";
    const queries = "language=en-US" + "&page=1" + "&append_to_response=images";
    const endpoint = `${path}movie/popular?${apiKey}&${queries}`;
    console.log(endpoint);

    fetch(endpoint, {
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
      <Center>
        <ItemsList>
          {!this.state.movies.length ? (
            <p>Loading...</p>
          ) : (
            this.state.movies.map(movie => (
              <div key={movie.id}>
                <img
                  src={
                    "https://image.tmdb.org/t/p/w" + imgSize + movie.poster_path
                  }
                  alt={movie.title}
                />
                <p>{movie.title}</p>
              </div>
            ))
          )}
        </ItemsList>
      </Center>
    );
  }
}

export default Movies;

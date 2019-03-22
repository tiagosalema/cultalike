import { Component } from "react";
import styled from "styled-components";
import Head from "next/head";

import { getMovies } from "../lib/fetchMovies";

import RateMovie from "./Mutations/RateMovie";
import MovieInput from "./MovieInput";

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
    movies: {},
    rateMovie: {}
  };

  componentDidMount() {
    getMovies()
      .then(({ results: movies }) => this.setState({ movies }))
      .catch(err => console.log(err));
  }

  handleChange = (title, rate) => {
    this.setState({ rateMovie: { ...this.state.rateMovie, [title]: rate } });
  };

  render() {
    return (
      <Center>
        <Head>
          <title>Movies | Cultalike</title>
          <link href="/static/index.css" rel="stylesheet" />
        </Head>
        <ItemsList>
          {!this.state.movies.length ? (
            <p>Loading...</p>
          ) : (
            this.state.movies.map(movie => {
              const { title } = movie;
              return (
                <div key={movie.id}>
                  <div className="container">
                    <img
                      src={"https://image.tmdb.org/t/p/w" + imgSize + movie.poster_path}
                      alt={title}
                      style={{ width: "100%" }}
                    />
                    <div className="centered">
                      {0 ? (
                        <div style={{ backgroundColor: "green", padding: "10px" }}>
                          Rated!
                        </div>
                      ) : (
                        <RateMovie inputs={{ title, rate: this.state.rateMovie[title] }}>
                          <label>
                            Rate:
                            <MovieInput
                              title={title}
                              value={this.state.rateMovie[title]}
                              onChange={this.handleChange}
                              onSubmit={this.handleSubmit}
                            />
                          </label>
                        </RateMovie>
                      )}
                    </div>
                  </div>
                  <p>{title}</p>
                </div>
              );
            })
          )}
        </ItemsList>
      </Center>
    );
  }
}

export default Movies;

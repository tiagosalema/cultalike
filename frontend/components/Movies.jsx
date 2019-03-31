import { Component } from "react";
import styled from "styled-components";
import Head from "next/head";
import { Query } from "react-apollo";

import { getMovies } from "../lib/fetchMovies";

import RateMovie from "./Mutations/RateMovie";
import MovieInput from "./MovieInput";
import { ALL_REVIEWED_MOVIES_QUERY } from "./ReviewedMovies";
import { CURRENT_USER_QUERY } from "./User";

import "../scss/components/_card.scss";
import RatedMoviesCounter from "./RatedMoviesCounter";

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
      <>
        <Center>
          <Head>
            <title>Movies | Cultalike</title>
            <link href="/static/index.css" rel="stylesheet" />
          </Head>
          <ItemsList>
            {!this.state.movies.length ? (
              <p>Loading...</p>
            ) : (
              <Query query={ALL_REVIEWED_MOVIES_QUERY}>
                {({ data, loading }) => {
                  return (
                    <>
                      {data.ratedMovies && (
                        <RatedMoviesCounter count={data.ratedMovies.length} />
                      )}
                      <Query query={CURRENT_USER_QUERY}>
                        {({ data: { me } }) => {
                          return this.state.movies.map(movie => {
                            const { title } = movie;
                            return (
                              <div key={movie.id} className="card">
                                <div className="card__side card__side--front">
                                  <img
                                    src={
                                      "https://image.tmdb.org/t/p/w" +
                                      imgSize +
                                      movie.poster_path
                                    }
                                    alt={title}
                                    style={{ width: "100%" }}
                                  />
                                </div>
                                {!loading &&
                                me &&
                                data.ratedMovies.some(
                                  ratedMovie =>
                                    ratedMovie.movie === title &&
                                    me.id === ratedMovie.rater.id
                                ) ? (
                                  <div className="card__side card__side--back card__side--back-rated">
                                    <div className="card__heading">{title}</div>
                                    <div className="card__content">Rated!</div>
                                  </div>
                                ) : (
                                  <div className="card__side card__side--back card__side--back-notRated">
                                    <div className="card__heading">{title}</div>
                                    <RateMovie
                                      inputs={{
                                        title,
                                        rate: this.state.rateMovie[title]
                                      }}
                                    >
                                      <label>
                                        <MovieInput
                                          className="card__input"
                                          title={title}
                                          value={this.state.rateMovie[title]}
                                          onChange={this.handleChange}
                                          onSubmit={this.handleSubmit}
                                        />
                                      </label>
                                    </RateMovie>
                                  </div>
                                )}
                              </div>
                            );
                          });
                        }}
                      </Query>
                    </>
                  );
                }}
              </Query>
            )}
          </ItemsList>
        </Center>
      </>
    );
  }
}

export default Movies;

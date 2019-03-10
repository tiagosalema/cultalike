import { Component } from "react";
import styled from "styled-components";
import { getMovies } from "../lib/fetchMovies";
import Head from "next/head";
import { Mutation } from "react-apollo";
import { ADD_REVIEWED_MOVIE_MUTATION } from "./Form";
import { ALL_REVIEWED_MOVIES_QUERY } from "./ReviewedMovies";

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
    ratedMovies: [{ title: "", rate: "" }]
  };

  componentDidMount() {
    getMovies()
      .then(({ results: movies }) => this.setState({ movies }))
      .catch(err => console.log(err));
  }

  handleChange = ({ target: { value: rate } }, title) => {
    // Change the following line to enable rating of multiple movies
    const ratedMovies = { title, rate };
    this.setState({ ratedMovies: [ratedMovies] });
  };

  handleSubmit = async (e, addRatedMovie) => {
    e.preventDefault();
    const res = await addRatedMovie({ variables: this.state.ratedMovies[0] });
  };

  handleUpdate = (cache, payload) => {
    const data = cache.readQuery({ query: ALL_REVIEWED_MOVIES_QUERY });
    data.ratedMovies.push(payload.data.createRatedMovie);
    cache.writeQuery({ query: ALL_REVIEWED_MOVIES_QUERY, data });
  };

  render() {
    const { ratedMovies } = this.state;
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
            this.state.movies.map(movie => (
              <div key={movie.id}>
                <div className="container">
                  <img
                    src={
                      "https://image.tmdb.org/t/p/w" +
                      imgSize +
                      movie.poster_path
                    }
                    alt={movie.title}
                    style={{ width: "100%" }}
                    onClick={this.toggleRateDisplay}
                  />
                  <div className="centered">
                    <Mutation
                      mutation={ADD_REVIEWED_MOVIE_MUTATION}
                      update={this.handleUpdate}
                      optimisticResponse={{
                        __typename: "Mutation",
                        createRatedMovie: {
                          __typename: "RatedMovie",
                          id: "cjswkyxg517bpski7cz119xvv",
                          movie: ratedMovies[0].title,
                          rate: ratedMovies[0].rate,
                          rater: { __typename: "User", name: "tiago" }
                        }
                      }}
                    >
                      {(addRatedMovie, { loading, error }) => {
                        if (loading) return null;
                        if (error) return <p>Error, my dude!!</p>;
                        return (
                          <form
                            onSubmit={e =>
                              this.handleSubmit(e, addRatedMovie, movie)
                            }
                          >
                            <label>
                              Rate:
                              <input
                                type="number"
                                value={
                                  ratedMovies.find(c => c.title === movie.title)
                                    ? ratedMovies[
                                        ratedMovies.findIndex(
                                          c => c.title === movie.title
                                        )
                                      ].rate
                                    : ""
                                }
                                onChange={e =>
                                  this.handleChange(e, movie.title)
                                }
                              />
                            </label>
                          </form>
                        );
                      }}
                    </Mutation>
                  </div>
                </div>
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

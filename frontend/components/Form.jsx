import { Component } from "react";

import RateMovie from "./Mutations/RateMovie";
import DisplaySearch from "./DisplaySearch";
import Button from "./common/Button";

import { getMovies } from "../lib/fetchMovies";

class Form extends Component {
  state = {
    inputs: { title: "", rate: "" },
    movies: {}
  };
  componentDidMount() {
    getMovies()
      .then(({ results: movies }) => this.setState({ movies }))
      .catch(err => console.log(err));
  }
  handleChange = ({ target }) => {
    const { name, value, type } = target;
    const val = type === "number" ? parseFloat(value) : value;
    const inputs = { ...this.state.inputs, [name]: val };
    this.setState({ inputs });
  };
  render() {
    const {
      movies,
      inputs: { title, rate }
    } = this.state;
    return (
      <RateMovie inputs={this.state.inputs}>
        <input
          list="suggestions"
          autoComplete="off"
          type="text"
          name="title"
          placeholder="Movie"
          value={title}
          onChange={this.handleChange}
        />
        {movies.length && title.length ? <DisplaySearch movies={movies} /> : <></>}
        <input
          type="number"
          name="rate"
          placeholder="Rate"
          value={rate}
          onChange={this.handleChange}
        />
        <Button label="Add rate" />
      </RateMovie>
    );
  }
}

export default Form;

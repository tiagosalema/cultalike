import React, { Component } from "react";

class MovieInput extends Component {
  handleChange = e => {
    this.props.onChange(this.props.title, e.target.value);
  };
  render() {
    return <input onChange={this.handleChange} value={this.props.value} />;
  }
}

export default MovieInput;

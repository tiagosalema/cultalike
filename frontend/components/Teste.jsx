import { Component } from "react";

class Field extends Component {
  handleChange = e => {
    this.props.onChange(this.props.id, e.target.value);
  };

  render() {
    return (
      <div>
        <input onChange={this.handleChange} value={this.props.value} />
      </div>
    );
  }
}

class Form extends Component {
  state = {};

  handleFieldChange = (fieldId, value) => {
    this.setState({ [fieldId]: value });
  };

  render() {
    const fields = ["field1", "field2", "anotherField"];
    return (
      <div>
        {fields.map(field => (
          <Field
            key={field}
            id={field}
            onChange={this.handleFieldChange}
            value={this.state[field]}
          />
        ))}
      </div>
    );
  }
}

export default Form;

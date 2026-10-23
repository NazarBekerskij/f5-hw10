
import { Component } from "react";
import "./Filter.css";

class Filter extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label className="filter">
        Find contacts by name
        <input
          className="filter-input"
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Enter a name..."
        />
      </label>
    );
  }
}

export default Filter;

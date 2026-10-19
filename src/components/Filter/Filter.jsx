import { Component } from "react";

class Filter extends Component {
  render() {
   const {value, onChange} = this.props
    return (
    <>
    <label>
      find contacts by name

      <input 
      type="text"
      value={value}
      onChange={onChange}
      />
    </label>
    </>
    );
  }
}

export default Filter;
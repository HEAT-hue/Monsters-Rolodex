// jshint esversion:6
import { Component } from "react";

// stylesheet accessible by all files
import "./search-box.styles.css";

// logging made easier
const log = console.log;

class SearchBox extends Component {
  render() {
    const {className, onChangeHandler, type, placeholder} = this.props;
    
    return (
      <input
        className={`search-box ${className}`}
        type={type}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
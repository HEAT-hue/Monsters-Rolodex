// jshint esversion:6

// stylesheet accessible by all files
import "./search-box.styles.css";

// logging made easier
const log = console.log;

function SearchBox(props) {
  // Destructure properties from props
  const { className, onChangeHandler, type, placeholder } = props;

  return (
    <input
      className={`search-box ${className}`}
      type={type}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
}

export default SearchBox;

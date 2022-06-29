// jshint esversion:6
import "./App.css";

import { Component } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const log = console.log;

class App extends Component {
  constructor() {
    super();

    // Create state
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  // Runs immediately componentis mounted on the DOM
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  // Render component on change in search field
  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      // Shallow merge occurs here
      return { searchField };
    });
  };

  render() {
    // destructure properties
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    let filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">

        <h1 className="app-title">Monsters Rolodex</h1>

        <SearchBox
          className="monsters-search-box"
          type="search"
          placeholder="Search monsters"
          onChangeHandler={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

// jshint esversion:6

// FILES IMPORT
import "./App.css";

// FEATURES IMPORT
import { useState, useEffect } from "react";

// COMPONENTS IMPORT
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

// Debugging purposes
const log = console.log;

function App() {
  // Create states
  let [monsters, setMonsters] = useState([]);
  let [searchField, setSearchField] = useState("");
  let [filteredMonsters, setFilteredMonsters] = useState(monsters);

  function onSearchChange(event) {
    const searchFieldvalue = event.target.value.toLowerCase();
    setSearchField(searchFieldvalue);
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    let newMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newMonsters);
  }, [monsters, searchField]);

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

export default App;

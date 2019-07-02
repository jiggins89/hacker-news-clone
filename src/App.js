// Library imports
import React from "react";
// Component imports
import SearchBar from "./components/SearchBar";
import NewsList from "./components/NewsList";
// Style imports
import "./App.css";

class App extends React.Component {
  state = { stories: "" };

  render() {
    return (
      <div className="App">
        <SearchBar />
        <NewsList />
      </div>
    );
  }
}

export default App;

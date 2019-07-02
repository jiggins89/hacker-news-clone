import React from "react";

class SearchBar extends React.Component {
  state = { userInput: "" };

  handleUpdate = e => {
    console.log(e.target.value);
  };

  render() {
    return (
      <div className="ui-segment" style={{ width: "100%" }}>
        <form>
          <input type="text" onChange={this.handleUpdate} />
        </form>
      </div>
    );
  }
}

export default SearchBar;

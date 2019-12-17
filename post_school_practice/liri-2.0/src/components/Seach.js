import React, { Component } from "react";
import Form from "./Form";

export default class header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    };
  }
  handleInputChange = event => {
    this.setState({
      search: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.props.category === "concert") {
      this.props.searchConcerts(this.state.search);
    } else if (this.props.category === "movie") {
      this.props.searchMovies(this.state.search);
    }
  };

  render() {
    return (
      <div
        style={{
          margin: "25px",
          padding: "20px",
          border: "black 1px solid"
        }}
      >
        <Form
          search={this.state.search}
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />
        <div style={{ margin: "20px", padding: " 20px" }}>
          <button onClick={() => this.props.setCategory("movie")}>Movie</button>
          <button onClick={() => this.props.setCategory("concert")}>
            Concerts
          </button>
        </div>
      </div>
    );
  }
}

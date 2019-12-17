import React, { Component } from "react";
import API from "../utils/API";
import Search from "../components/Seach";
import Concerts from "../components/Concerts";
import Movie from "../components/Movies";

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      movie: [],
      category: ""
    };

    this.searchConcertsByArtist = this.searchConcertsByArtist.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
    this.setCategory = this.setCategory.bind(this);
  }

  searchConcertsByArtist(search) {
    API.getConcertResults(search).then(results => {
      this.setState({ results: results.data });
    });
  }

  searchMovies(search) {
    API.getMovieResults(search).then(results => {
      // console.log(results);
      this.setState({ movie: results.data });
    });
  }

  setCategory(selection) {
    this.setState({ category: selection });
  }

  render() {
    const { results, movie } = this.state;
    console.log(this.state.movie);
    return (
      <div>
        <Search
          category={this.state.category}
          setCategory={this.setCategory}
          searchConcerts={this.searchConcertsByArtist}
          searchMovies={this.searchMovies}
        />
        {this.state.category === "concert" && this.state.results.length > 0 ? (
          <Concerts results={results} />
        ) : null}
        {this.state.category === "movie" && this.state.movie ? (
          <Movie results={movie} />
        ) : null}
      </div>
    );
  }
}

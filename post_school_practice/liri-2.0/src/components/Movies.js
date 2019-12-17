import React from "react";

export default function Movies(props) {
  return (
    <div
      style={{
        margin: "25px",
        padding: "20px",
        border: "black 1px solid"
      }}
    >
      <h1>{props.results.Title}</h1>
      <img src={props.results.Poster} alt="movie Poster"></img>
    </div>
  );
}

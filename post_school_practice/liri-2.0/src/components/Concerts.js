import React from "react";

export default function Concerts(props) {
  return (
    <div>
      {props.results.map((x, i) => (
        <div key={i}>
          {x.artist ? (
            <div
              style={{
                margin: "25px",
                padding: "20px",
                border: "black 1px solid"
              }}
            >
              {" "}
              <h3>{x.artist.name}</h3>
              <img src={x.artist.image_url} alt="artist pic"></img>
            </div>
          ) : null}
          <div
            style={{
              margin: "25px",
              padding: "20px",
              border: "black 1px solid"
            }}
          >
            <h3>
              <span style={{ fontWeight: "bold" }}>Venue: </span>
              {x.venue.name}
            </h3>
            <h3>City: {x.venue.city}</h3>
            <h3>Country: {x.venue.country}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

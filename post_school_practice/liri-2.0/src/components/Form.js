import React from "react";

export default function form(props) {
  return (
    <div style={style}>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="search">Search</label>
        <div className="row-player-inputs">
          <input
            type="text"
            id="search"
            placeholder="Search Here"
            autoComplete="off"
            value={props.search}
            onChange={props.handleInputChange}
          />
          <button
            onClick={props.handleSubmit}
            type="submit"
            disabled={!props.search}
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

const style = {
  margin: "20px",
  padding: " 20px",
  border: " px solid black"
};

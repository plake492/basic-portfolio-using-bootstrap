import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Popular from "./compoments/Popular";

class App extends React.Component {
  render() {
    // console.log(arr);

    return (
      <div className="container">
        <Popular />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

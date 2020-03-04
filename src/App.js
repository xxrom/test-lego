import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { json } from "./testJson";

import Viewer from "lego-react-json-view";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          DEMO: Lego-react-json-view{" "}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            ( NPM package link )
          </a>
        </p>

        {/* <Viewer /> */}
        <Viewer json={json} />
      </header>
    </div>
  );
}

export default App;

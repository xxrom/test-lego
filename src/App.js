import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { json } from "./testJson";

import Viewer from "lego-react-json-view";

export const isDarkTheme =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

function App() {
  const headerStyle = isDarkTheme
    ? {}
    : {
        background: "#ddd",
        color: "black"
      };

  return (
    <div className="App">
      <header className="App-header" style={headerStyle}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          DEMO: Lego-react-json-view{" "}
          <a
            className="App-link"
            href="https://www.npmjs.com/package/lego-react-json-view"
            target="_blank"
            rel="noopener noreferrer"
          >
            ( NPM package link )
          </a>
        </p>

        <Viewer json={json} />
      </header>
    </div>
  );
}

export default App;

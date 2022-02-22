import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import { Router } from "@reach/router";

import Dynamic from "containers/Dynamic";

import "./app.css";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <Root>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
      <footer
        className="Footer"
        style={{ fontSize: "small", padding: "1em 0" }}
      >
        <div className="container">
          &copy; 2016 - {currentYear} Raresh Nistor
        </div>
      </footer>
    </Root>
  );
}

export default App;

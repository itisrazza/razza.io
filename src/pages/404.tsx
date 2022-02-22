import Navbar from "components/Navbar";
import React from "react";

export default () => (
  <div>
    <Navbar title="404 Not Found" />
    <div style={{ textAlign: "center", padding: "2em 0" }}>
      <div style={{ fontSize: "5em", padding: "0.5em 0" }} className="emoji">
        🤔
      </div>
      <h1>Weird... It&lsquo;s not here</h1>
      <p>The thing you were seemingly looking for isn&apos;t here.</p>
      <p>
        Try going back <a href="https://razza.io/">home</a> and retrace your
        steps.
      </p>
    </div>
  </div>
);

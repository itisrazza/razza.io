import React from "react";
import Navbar from "components/Navbar";
// import { useSiteData } from "react-static";

export default () => {
  // const { siteLinks } = useSiteData();

  return (
    <>
      <Navbar title="About" />
      <main>
        <div className="container">
          <p>
            Hello there! My name is Raresh (or Rareș, or Razz). I&apos;m a
            software developer working in energy retail software. I&apos;ve also recently wrapped up a Computer Science degree at{" "}
            <a href="https://www.wgtn.ac.nz/" target="_blank" rel="noreferrer">
              Victoria University of Wellington
            </a>
            .
          </p>
          <p>
            I&apos;m interested in various curious things, like technology and
            building things, taking photos, designing stuff and reading a whole
            lot of Wikipedia.
          </p>
        </div>
      </main>
    </>
  );
};

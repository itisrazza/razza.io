import React, { useEffect, useState } from "react";
import { useSiteData } from "react-static";
import { Link } from "@reach/router";
// import { Project, SiteLink } from "../../types/index";

import "../styles/index.css";
import { ProjectButton } from "../components/ProjectButton";
import { Project } from "../../types";
import { Head } from "react-static";

const alternateNames = [
  "Raresh Nistor", // english
  "Rareș Nistor", // romanian
  "Razz Nistor", // english (alt)
];

export default () => {
  const [name, setName] = useState(alternateNames[0]);
  useEffect(() => {
    setName(alternateNames[(alternateNames.length * Math.random()) | 0]);
  }, [name, setName]);

  const { projects, siteLinks } = useSiteData();
  const latestProjects = projects.slice(0, 3);

  return (
    <div className="Home">
      <Head>
        <title>{alternateNames[0]}</title>
      </Head>
      <header>
        <div className="container">
          <h1>{name}</h1>
          <p>
            I&apos;m a software engineer. I work on{" "}
            <Link to="/projects">various projects</Link> and{" "}
            <a href={siteLinks.notes.link} target="_blank" rel="noreferrer">
              write notes
            </a>{" "}
            every now and then.
          </p>
        </div>
      </header>
      <main>
        <div className="container">
          <div style={{ gridColumn: 3, gridRow: 1 }}>
            <div className="link-stack">
              <Link to="/about">About</Link>
              <a href={siteLinks.notes.link} target="_black" rel="noreferrer">
                Notes
              </a>
              <a href={siteLinks.twitter.link} target="_black" rel="noreferrer">
                Twitter
              </a>
              <a href={siteLinks.github.link} target="_black" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>

          <div className="project-stack">
            {latestProjects.map((project: Project) => (
              <ProjectButton
                key={project.name}
                name={project.name}
                link={project.link}
                description={project.description}
              />
            ))}
            <br />
            <Link to="/projects">All Projects →</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

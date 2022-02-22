import React, { useEffect, useState } from "react";
import { useSiteData } from "react-static";
import { Link } from "@reach/router";
// import { Project, SiteLink } from "../../types/index";

import "../styles/index.css";
import { ProjectButton } from "../components/ProjectButton";
import { Project } from "../../types";

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
      <header>
        <div className="container">
          <h1>{name}</h1>
          <p>
            I&apos;m a Wellingtonian software engineering student at{" "}
            <a
              href="//wgtn.ac.nz"
              target="_black"
              rel="noreferrer"
              title="Victoria University of Wellington"
            >
              VUW
            </a>
            . I work on <Link to="/projects">various projects</Link> and{" "}
            <a href={siteLinks.notes} target="_blank" rel="noreferrer">
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
              <a
                href="//notion.so/thegreatrazz/d5024bf1e6344c49a561f7a4ff7fe769?v=57a969aad0924012961ca3b9e214ae16"
                target="_black"
                rel="noreferrer"
              >
                Notes
              </a>
              <a
                href="//twitter.com/thegreatrazz"
                target="_black"
                rel="noreferrer"
              >
                Twitter
              </a>
              <a
                href="//github.com/thegreatrazz"
                target="_black"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="mailto:raresh@nistor.email"
                target="_black"
                rel="noreferrer"
              >
                Email
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

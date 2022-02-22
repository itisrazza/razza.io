import Navbar from "components/Navbar";
import { ProjectButton } from "components/ProjectButton";
import React from "react";
import { useSiteData } from "react-static";
import { Project } from "../../types";

import "../styles/projects.css";

export default () => {
  const { projects, siteLinks } = useSiteData();

  return (
    <>
      <Navbar title="Projects" />
      <main>
        <div className="container">
          <p>
            Most of my projects are available on{" "}
            <a href={siteLinks.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            .
          </p>
          <div className="projects">
            {projects
              .filter((project: Project) => !project.archived)
              .map((project: Project) => (
                <ProjectButton
                  key={project.name}
                  name={project.name}
                  link={project.link}
                  description={project.description}
                />
              ))}
          </div>

          <h1>Archived</h1>
          <p>
            Older projects I&apos;ve worked on in the past, but have since moved
            on from.
          </p>
          <div className="projects">
            {projects
              .filter((project: Project) => !!project.archived)
              .map((project: Project) => (
                <ProjectButton
                  key={project.name}
                  name={project.name}
                  link={project.link}
                  description={project.description}
                />
              ))}
          </div>
        </div>
      </main>
    </>
  );
};

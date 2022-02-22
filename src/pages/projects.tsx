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
            <a href={siteLinks.github.link} target="_blank" rel="noreferrer">
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
            Some projects which are either a one-off, or an older project which
            I&apos;ve since left behind.
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

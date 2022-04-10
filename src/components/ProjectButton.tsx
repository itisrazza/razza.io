import React from "react";
import "./ProjectButton.css";

interface ProjectButtonProps {
  name: string;
  description: string;
  link: string;
}

export function ProjectButton(props: ProjectButtonProps) {
  return (
    <div className="project-button">
      <div className="project-name">
        <a href={props.link} target="_blank" rel="noreferrer">
          {props.name}&nbsp;↗
        </a>
      </div>
      <div className="project-description">{props.description}</div>
    </div>
  );
}

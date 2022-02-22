import React from "react";
import { CSSProperties } from "react";
import "./TypewriterHeading.css";

export function TypewriterHeading(props: { children: string }) {
  const textLength = props.children.length;

  return (
    <h1 className="TypewriterHeading">
      <span className="TypewriterHeading-text">
        <span
          className="TypewriterHeading-cover"
          style={{ "--textlength": textLength } as CSSProperties}
        />
        {props.children}
      </span>
    </h1>
  );
}

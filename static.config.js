import React from "react";
import path from "path";
import fs from "fs/promises";
// import { Post } from './types'

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

export default {
  entry: path.join(__dirname, "src", "index.tsx"),
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData, renderMeta },
  }) => (
    <Html lang="en-NZ">
      <Head titleTemplate="%s - Raresh's Website">
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),

  getSiteData: async () => {
    const siteTitle = "Raresh's Website";
    const projects = JSON.parse(await fs.readFile("./data/projects.json"));
    const siteLinks = JSON.parse(await fs.readFile("./data/links.json"));

    return { projects, siteLinks };
  },

  getRoutes: async () => {
    return [];
  }, // TODO: add routes later, at some point

  plugins: [
    "react-static-plugin-typescript",
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages"),
      },
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap"),
  ],
};

import React from "react";
import Navbar from "components/Navbar";
import { useSiteData } from "react-static";

export default () => {
  const { siteLinks } = useSiteData();

  return (
    <>
      <Navbar title="About" />
      <main>
        <div className="container">
          <p>
            Hello there! My name is Raresh (or Rareș, or Razz). I&apos;m a
            software developer at <a href="https://www.fluxfederation.com/" target="_blank">Flux Federation</a>.
            I&apos;m also wrapping up Computer Science at <a href="https://www.wgtn.ac.nz/" target="_blank">Victoria University of Wellington</a>.
          </p>
          <p>
            I&apos;m interested in various curious things, like technology and
            building things, taking photos, designing stuff and reading a whole
            lot of Wikipedia.
          </p>

          <h1>Get in touch</h1>
          <p>
            Online, I&apos;ve given myself the pseudonym of{" "}
            <code>thegreatrazz</code>. I&apos;m on{" "}
            <a href={siteLinks.twitter.link} target="_blank" rel="noreferrer">
              Twitter
            </a>{" "}
            and other social media.
          </p>

          <h1>This Website</h1>
          <p>
            This website is made with{" "}
            <a
              href="https://github.com/react-static/react-static"
              target="_blank"
              rel="noreferrer"
            >
              React Static
            </a>{" "}
            and is hosted on{" "}
            <a
              href="https://pages.github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Pages
            </a>
            . You can grab a copy of the source code from{" "}
            <a
              href="https://github.com/thegreatrazz/razza.io"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            .
          </p>
          <p>
            Typography wise, I&apos;m using{" "}
            <a href="https://rsms.me/inter/" target="_blank" rel="noreferrer">
              Inter
            </a>{" "}
            for text{" "}
            <a
              href="https://rsms.me/inter/lab/?feat-cv05=1&feat-cv11=1&feat-ss01=1&feat-ss03=1&varSlant=4.01&varfont=1"
              target="_blank"
              rel="noreferrer"
            >
              with a few tweaks
            </a>{" "}
            and{" "}
            <a
              href="https://www.jetbrains.com/lp/mono/"
              target="_blank"
              rel="noreferrer"
            >
              <code>Jetbrains Mono</code>
            </a>{" "}
            for the code bits.
          </p>
        </div>
      </main>
    </>
  );
};

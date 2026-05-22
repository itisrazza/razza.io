import setupFooter from "./footer";
import setupNavigation from "./navigation";

console.info(`You're more than welcome to look around here, but this whole this whole thing is on GitHub.

More info: https://razza.io/projects/razza.io
GitHub: https://github.com/itisrazza/razza.io
`);

const setupFunctions: [string, () => void][] = [
  ["footer", setupFooter],
  ["navigation", setupNavigation],
]

for (const [name, fn] of setupFunctions) {
  try {
    fn();
    console.debug(`${name}: OK`);
  } catch (error: unknown) {
    console.log(`Failed to set up '${name}'`, error);
  }
}

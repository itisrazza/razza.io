console.info(`You're more than welcome to look around here, but this whole this whole thing is on GitHub.

More info: https://razza.io/projects/razza.io
GitHub: https://github.com/itisrazza/razza.io
`);

const footerNames = [
  "Rareș Nistor",
  "Raresh Nistor",
  "Razz Nistor",
  "Razza",
  "Рареш Нистор",
  "ラレシュ ニストル",
  "Ραρές Νίστορ",
];

const footerName = document.getElementById("footer-name");
if (footerName) {
  let index = 0;

  footerName.addEventListener("click", () => {
    index = (index + 1) % footerNames.length;
    footerName.textContent = footerNames[index];
  });
}

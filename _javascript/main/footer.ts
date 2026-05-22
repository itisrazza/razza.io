const footerNames = [
  "Rareș Nistor",
  "Raresh Nistor",
  "Razz Nistor",
  "Razza",
  "Рареш Нистор",
  "ラレシュ ニストル",
  "Ραρές Νίστορ",
];

export default function setupFooter() {
  const footerName = document.getElementById("footer-name");
  if (footerName) {
    let index = 0;

    footerName.addEventListener("click", () => {
      index = (index + 1) % footerNames.length;
      footerName.textContent = footerNames[index];
    });
  }
}

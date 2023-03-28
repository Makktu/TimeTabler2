import displayMessage from "./messageArea.js";
import playSound from "./sfxPlayer.js";

export default function savePage() {
  let saveCells = document.getElementsByTagName("td");
  let cellsToBeSaved = [];
  [...saveCells].forEach((cell) => {
    if (cell.classList[2]) {
      cellsToBeSaved.push(cell.classList[1].split("-")[1].substring(4));
      cellsToBeSaved.push(cell.classList);
      cell.textContent
        ? cellsToBeSaved.push(cell.textContent)
        : cellsToBeSaved.push(null);
    }
  });
  localStorage.setItem("pageState", JSON.stringify(cellsToBeSaved));
  setTimeout(() => {
    playSound("accept");
    displayMessage("SAVED to Local Storage ✅");
  }, 350);
}

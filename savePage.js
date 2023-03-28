import displayMessage from "./messageArea.js";
import playSound from "./sfxPlayer.js";

export default function savePage() {
  let saveCells = document.getElementsByTagName("td");
  localStorage.setItem("pageState", JSON.stringify([...saveCells]));
  console.log([...saveCells]);
  setTimeout(() => {
    playSound("accept");
    displayMessage("SAVED to Local Storage ✅");
  }, 350);
}

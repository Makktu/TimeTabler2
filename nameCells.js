document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

window.oncontextmenu = (e) => {
  if (e.target.classList.contains("unique-cell0")) return;
  if (e.target.textContent) {
    e.target.textContent = "";
    return;
  }
  let cellName = nameCells();
  console.log(e.target, cellName);
  // check here for highlighted cells above and below
  e.target.textContent = cellName;
};

export default function nameCells() {
  let cellName = prompt("What are you TimeTabling here?");
  if (cellName) return cellName.toUpperCase();
}

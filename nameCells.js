document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

window.oncontextmenu = (e) => {
  if (e.target.classList.contains("unique-cell0")) return;
  if (e.target.textContent) {
    e.target.textContent = "";
    if (e.target.classList.contains("clicked-cell-on")) {
      e.target.classList.remove("clicked-cell-on");
    }
    return;
  }
  let cellName = nameCells();
  console.log(e.target, cellName);
  // check here for highlighted cells above and below
  e.target.textContent = cellName;
};

export default function nameCells() {
  let cellName = prompt("What are you TimeTabling here?");
  return cellName.toUpperCase();
}

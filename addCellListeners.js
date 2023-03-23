let allCells = document.getElementsByTagName("td");

export default function addCellListeners() {
  [...allCells].forEach((cell, ind) => {
    cell.classList.add("active-timetable-cell");
    cell.classList.add(`unique-cell${ind}`);
    cell.addEventListener("click", () => {
      // playSound("accept");
      if (cell.classList.contains("clicked-cell-on")) {
        cell.classList.remove("clicked-cell-on");
      } else {
        cell.classList.add("clicked-cell-on");
      }
    });
  });
}

export default function loadData() {
  if (localStorage.getItem("pageState")) {
    console.log("HERE");
    // get the data
    let loadedData = JSON.parse(localStorage.getItem("pageState"));
    // find out which cells need to have the class added
    let loadCells = document.getElementsByTagName("td");
    let checked = 0;
    [...loadCells].forEach((cell) => {
      if (cell.classList[1].split("-")[1].substring(4) == loadedData[checked]) {
        cell.classList.add(loadedData[checked + 1][2]);
        cell.textContent = loadedData[checked + 2];
        checked += 3;
      }
    });
  }
}

export default function savePage() {
  let saveCells = document.getElementsByTagName("td");
  console.log(saveCells, typeof saveCells);
  localStorage.setItem("pageState", JSON.stringify(saveCells));
  console.log("SAVING....");
}

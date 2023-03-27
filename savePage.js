export default function savePage() {
  let saveCells = document.getElementsByTagName("td");
  localStorage.setItem("pageState", JSON.stringify(saveCells));
  console.log("SAVING....");
}

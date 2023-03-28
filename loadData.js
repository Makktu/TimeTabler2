// function json2array(json) {
//   let result = [];
//   let keys = Object.keys(json);
//   keys.forEach(function (key) {
//     result.push(json[key]);
//   });
//   return result;
// }

export default function loadUserData() {
  let loadedPage = JSON.parse(localStorage.getItem("pageState"));
  // let loadedCellsArray = json2array(loadedPage);
  console.log(loadedPage, typeof loadedPage);
  return loadedPage;
}

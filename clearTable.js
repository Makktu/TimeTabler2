export default function clearTable() {
  let finalDecision = prompt(
    "This will clear ALL data from the table.\nType YES to proceed.\n\n Typing anything else or pressing OK/CANCEL will cancel"
  );
  if (finalDecision.toUpperCase() == "YES") {
    console.log("CLEARING...");
    location.reload();
  } else alert("You cancelled.");
}

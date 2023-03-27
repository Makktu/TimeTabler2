const msgArea = document.getElementById("message-area");

export default function displayMessage(message) {
  msgArea.innerText = "TIME " + message;
}

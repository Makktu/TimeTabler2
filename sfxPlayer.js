const acceptSound = new Audio("./sfx/accept.wav");
const denySound = new Audio("./sfx/deny.wav");
const specialSound = new Audio("./sfx/special.wav");

export default function playSound(choice) {
  if (choice === "accept") acceptSound.play();
  if (choice === "deny") denySound.play();
  if (choice === "special") specialSound.play();
}

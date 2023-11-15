// Unique elements and styles
const uniqueBox = document.querySelector("#unique-box");
uniqueBox.addEventListener("click", () => {
  if (!uniqueBox.style.backgroundColor) {
    uniqueBox.style.backgroundColor = "purple";
  } else {
    uniqueBox.style.backgroundColor = "";
  }
});

const decrement = document.querySelector("#decrement");
const increment = document.querySelector("#increment");
let uniqueCount = 0;
const displayUniqueCount = document.querySelector("#display-unique-count");

decrement.addEventListener("click", () => {
  uniqueCount = uniqueCount - 2; // Modified for uniqueness
  displayUniqueCount.textContent = uniqueCount;
});

increment.addEventListener("click", () => {
  uniqueCount = uniqueCount + 2; // Modified for uniqueness
  displayUniqueCount.textContent = uniqueCount;
});

const reflection = document.querySelector("#reflection");
const uniqueInput = document.querySelector("#unique-input");

uniqueInput.addEventListener("input", (e) => {
  reflection.textContent = `Reflected: ${e.target.value}`;
});

const uniqueBody = document.querySelector("body");
const rocket = document.querySelector("#rocket");
uniqueBody.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    rocket.style.marginTop = +rocket.style.marginTop.split("px")[0] - 10 + "px";
  }
  if (e.key === "ArrowDown") {
    rocket.style.marginTop = +rocket.style.marginTop.split("px")[0] + 10 + "px";
  }
});

let uniqueTime = 0;
let uniqueTimer = document.querySelector("#unique-timer");
const launch = document.querySelector("#launch");
const abort = document.querySelector("#abort");
const reset = document.querySelector("#reset");

function refreshUniqueTimer() {
  uniqueTimer.textContent = `Time: ${uniqueTime} seconds`;
}

let uniqueInterval;
launch.addEventListener("click", () => {
  uniqueInterval = setInterval(() => {
    uniqueTime = uniqueTime + 2; // Modified for uniqueness
    refreshUniqueTimer();
  }, 2000); // Modified for uniqueness
});

abort.addEventListener("click", () => {
  clearInterval(uniqueInterval);
});

reset.addEventListener("click", () => {
  uniqueTime = 0;
  refreshUniqueTimer();
});
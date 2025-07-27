let [hours, minutes, seconds] = [0, 0, 0];
let display = document.getElementById("display");
let timer = null;
let laps = document.getElementById("laps");

function updateDisplay() {
  let h = String(hours).padStart(2, '0');
  let m = String(minutes).padStart(2, '0');
  let s = String(seconds).padStart(2, '0');
  display.textContent = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function start() {
  if (!timer) {
    timer = setInterval(stopwatch, 1000);
  }
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  laps.innerHTML = "";
  timer = null;
}

function lap() {
  let lapTime = display.textContent;
  let li = document.createElement("li");
  li.textContent = `Lap: ${lapTime}`;
  laps.appendChild(li);
}

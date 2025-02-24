let minutes = 0;
let seconds = 0;
let timerInterval;
let isRunning = false;

const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");
const resetButton = document.getElementById("resetButton");
const startButton = document.getElementById("startButton");

function updateDisplay() {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

upButton.addEventListener("click", () => {
    if (minutes < 99) {
        minutes++;
        updateDisplay();
    }
});

downButton.addEventListener("click", () => {
    if (minutes > 0) {
        minutes--;
        updateDisplay();
    }
});

resetButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    isRunning = false;
    minutes = 0;
    seconds = 0;
    startButton.textContent = "START";
    updateDisplay();
});

startButton.addEventListener("click", () => {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
        startButton.textContent = "START";
    } else {
        isRunning = true;
        startButton.textContent = "STOP";
        timerInterval = setInterval(() => {
            if (minutes === 0 && seconds === 0) {
                clearInterval(timerInterval);
                isRunning = false;
                startButton.textContent = "START";
            } else {
                if (seconds === 0) {
                    minutes--;
                    seconds = 59;
                } else {
                    seconds--;
                }
                updateDisplay();
            }
        }, 1000);
    }
});

updateDisplay();
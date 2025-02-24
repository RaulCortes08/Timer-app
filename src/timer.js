export default class Timer {
    constructor(displayElement) {
      this.displayElement = displayElement;
      this.minutes = 0;
      this.seconds = 0;
      this.timerInterval = null;
      this.isRunning = false;
      this.updateDisplay();
    }
  
    updateDisplay() {
      const minutes = String(this.minutes).padStart(2, '0');
      const seconds = String(this.seconds).padStart(2, '0');
      this.displayElement.textContent = `${minutes}:${seconds}`;
    }
  
    start() {
      if (!this.isRunning) {
        this.isRunning = true;
        this.timerInterval = setInterval(() => {
          if (this.seconds === 0) {
            if (this.minutes === 0) {
              this.stop();
            } else {
              this.minutes--;
              this.seconds = 59;
            }
          } else {
            this.seconds--;
          }
          this.updateDisplay();
        }, 1000);
      }
    }
  
    stop() {
      clearInterval(this.timerInterval);
      this.isRunning = false;
    }
  
    reset() {
      this.stop();
      this.minutes = 0;
      this.seconds = 0;
      this.updateDisplay();
    }
  
    increaseTime() {
      if (this.minutes < 99) {
        this.minutes++;
        this.updateDisplay();
      }
    }
  
    decreaseTime() {
      if (this.minutes > 0) {
        this.minutes--;
        this.updateDisplay();
      }
    }  }

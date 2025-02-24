import Timer from './timer.js';
import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('startButton');
  const stopButton = document.getElementById('stopButton');
  const resetButton = document.getElementById('resetButton');
  const upButton = document.getElementById('upButton');
  const downButton = document.getElementById('downButton');
  const display = document.getElementById('minutes');
  const secondsDisplay = document.getElementById('seconds');
  
  const timer = new Timer(display);

  // Botones de control
  startButton.addEventListener('click', () => timer.start());
  stopButton.addEventListener('click', () => timer.stop());
  resetButton.addEventListener('click', () => timer.reset());

  // Botones para incrementar y decrementar tiempo
  upButton.addEventListener('click', () => timer.increaseTime());
  downButton.addEventListener('click', () => timer.decreaseTime());
});
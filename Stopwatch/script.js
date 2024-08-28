let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let time = 0;

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStopButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');
const lapButton = document.getElementById('lapButton');
const lapList = document.getElementById('lapList');

function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
        startStopButton.textContent = 'Stop';
        pauseButton.disabled = false;
        lapButton.disabled = false;
    } else {
        clearInterval(tInterval);
        running = false;
        startStopButton.textContent = 'Start';
    }
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((difference / (1000 * 60)) % 60);
    let seconds = Math.floor((difference / 1000) % 60);
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    display.textContent = hours + ':' + minutes + ':' + seconds;
}

function pauseTimer() {
    clearInterval(tInterval);
    running = false;
    startStopButton.textContent = 'Start';
}

function resetTimer() {
    clearInterval(tInterval);
    running = false;
    time = 0;
    display.textContent = '00:00:00';
    startStopButton.textContent = 'Start';
    pauseButton.disabled = true;
    lapButton.disabled = true;
    lapList.innerHTML = '';
}

function addLap() {
    const lapTime = display.textContent;
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapList.appendChild(lapItem);
}

startStopButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', addLap);

const timerInSeconds = 7263 * 1000;

let timestamp;
let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;
let timer;

const setCountDown = () => {
  localStorage.getItem('countdown')
    ? localStorage.getItem('countdown')
    : localStorage.setItem('countdown', Date.now() + timerInSeconds);

  timestamp = Number(localStorage.getItem('countdown'));
  timestamp - Date.now() <= 1000
    ? localStorage.setItem('countdown', Date.now() + timerInSeconds)
    : timestamp;
};

const showRemaining = () => {
  setCountDown();
  let now = new Date();
  let left = new Date(timestamp) - now;
  let hours = Math.floor((left % day) / hour);
  let minutes = Math.floor((left % hour) / minute);
  let seconds = Math.floor((left % minute) / second);

  document.querySelectorAll('.hours .countdown').forEach((el) => {
    el.innerText = hours < 10 ? '0' + hours : hours;
  });
  document.querySelectorAll('.minutes .countdown').forEach((el) => {
    el.innerText = minutes < 10 ? '0' + minutes : minutes;
  });
  document.querySelectorAll('.seconds .countdown').forEach((el) => {
    el.innerText = seconds < 10 ? '0' + seconds : seconds;
  });
  setTimeout(showRemaining, 1000);
};

setCountDown();
showRemaining();

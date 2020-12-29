const refs = {
  timer: document.getElementById('timer-1'),
  days: document.querySelector('.value[data-value="days"]'),
  hours: document.querySelector('.value[data-value="hours"]'),
  mins: document.querySelector('.value[data-value="mins"]'),
  secs: document.querySelector('.value[data-value="secs"]'),
};
console.log(refs);

let day = `Jan 7 2021 00:00:01`;

function setTime(time) {
  let days = pad(Math.floor(time / 1000 / 60 / 60 / 24));
  let hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  let mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  let secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  return { days, hours, mins, secs };
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function myTimer(date, object) {
  let timeBetween = new Date(date) - Date.now();
  let x = setTime(timeBetween);
  console.log(x);

  object.days.textContent = x.days;
  object.hours.textContent = x.hours;
  object.mins.textContent = x.mins;
  object.secs.textContent = x.secs;
}

let interval;

window.addEventListener('DOMContentLoaded', () => {
  interval = setInterval(() => {
    myTimer(day, refs);
  }, 1000);
});

window.addEventListener('click', () => {
  clearInterval(interval);
  pad(refs.days, refs.hours, refs.mins, refs.seconds);
});

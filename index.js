class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.timer = document.getElementById(selector);
    this.days = document.querySelector('.value[data-value="days"]');
    this.hours = document.querySelector('.value[data-value="hours"]');
    this.mins = document.querySelector('.value[data-value="mins"]');
    this.secs = document.querySelector('.value[data-value="secs"]');
  }

  start() {
      this.runTimer();
      
      setInterval(() => {
        this.runTimer();
      }, 1000);
  }

  runTimer() {
    let time = this.targetDate - Date.now();
    const { days, hours, mins, secs } = this.setTime(time);
    this.days.textContent = days;
    this.hours.textContent = hours;
    this.mins.textContent = mins;
    this.secs.textContent = secs;
  }
  setTime(time) {
    let days = this.pad(Math.floor(time / 1000 / 60 / 60 / 24));
    let hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    let mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    let secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const countdownToChristmas = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 7, 2021'),
});

countdownToChristmas.start();

// Functions

// const refs = {
//   timer: document.getElementById('timer-1'),
//   days: document.querySelector('.value[data-value="days"]'),
//   hours: document.querySelector('.value[data-value="hours"]'),
//   mins: document.querySelector('.value[data-value="mins"]'),
//   secs: document.querySelector('.value[data-value="secs"]'),
// };
// console.log(refs);
// let day = `Jan 7 2021 00:00:01`;

// function setTime(time) {
//   let days = pad(Math.floor(time / 1000 / 60 / 60 / 24));
//   let hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//   );
//   let mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   let secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//   return { days, hours, mins, secs };
// }

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// function myTimer(date, object) {
//   let timeBetween = new Date(date) - Date.now();
//   let x = setTime(timeBetween);
// //   console.log(x);

//   object.days.textContent = x.days;
//   object.hours.textContent = x.hours;
//   object.mins.textContent = x.mins;
//   object.secs.textContent = x.secs;
// }

// let interval;

// window.addEventListener('DOMContentLoaded', () => {
//   interval = setInterval(() => {
//     myTimer(day, refs);
//   }, 1000);
// });

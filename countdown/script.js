const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const loader = document.getElementById('loader');
const year = document.getElementById('year');
const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

year.innerText = currentYear + 1;

function updateCountdown() {
  const currentTime = new Date();
  const diffTime = newYearTime - currentTime;

  const daysToCount = Math.floor(diffTime / 1000 / 60 / 60 / 24);
  const hoursToCount = Math.floor(diffTime / 1000 / 60 / 60) % 24;
  const minutesToCount = Math.floor(diffTime / 1000 / 60) % 60;
  const secondsToCount = Math.floor(diffTime / 1000) % 60;

  days.innerText = daysToCount < 10 ? '0' + daysToCount : daysToCount;
  hours.innerText = hoursToCount < 10 ? '0' + hoursToCount : hoursToCount;
  minutes.innerText = minutesToCount < 10 ? '0' + minutesToCount : minutesToCount;
  seconds.innerText = secondsToCount < 10 ? '0' + secondsToCount : secondsToCount;
}

setTimeout(() => {
  loader.remove();
  countdown.style.display = 'flex';
}, 1500);

setInterval(updateCountdown, 1000);
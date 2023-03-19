import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
const startBtn = document.querySelector('[data-start]')
const timeSetter = document.querySelector('#datetime-picker')
const days = document.querySelector('[data-days]')
const hours = document.querySelector('[data-hours]')
const minutes = document.querySelector('[data-minutes]')
const seconds = document.querySelector('[data-seconds]')
startBtn.disabled = true
const newFlatpickr = flatpickr(timeSetter, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (Date.parse(newFlatpickr._initialDate) > Date.parse(selectedDates[0])) {
      Notify.failure('Plese select date in future', {
        timeout: 2000
      })
    } else startBtn.disabled = false
  },
});

function addLeadingZero(value) {
  return value.toString().padStart(2,"0")
}

startBtn.addEventListener('click', () => {
  const now = Date.now()
  const selected = Date.parse(newFlatpickr.selectedDates[0])
  let difference = selected - now
  const timer = setInterval(() => {
    const obj = convertMs(difference)
    days.textContent = addLeadingZero(obj.days)
    hours.textContent = addLeadingZero(obj.hours)
    minutes.textContent = addLeadingZero(obj.minutes)
    seconds.textContent = addLeadingZero(obj.seconds)
    if (difference <= 0) {
      clearInterval(timer)
    }
    difference -= 1000
  }, 1000)
  
})









const countdown = () => {
  const date = new Date("05 19,2023 00:00:00");
  const countDate = date.getTime();

  const now = new Date().getTime();
  const gap = countDate - now;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;
  const d = new Date();
  let month = d.getMonth();

  let monthsRemaining = date.getMonth() - month;

  const daysInMonth = "31 28 31 30 31 30 31 31 30 31 30 31".split(" ");
  const daysInCurrentMonth = daysInMonth[month];
  const todaysDate = d.getDate();
  const remainingDays = daysInCurrentMonth - todaysDate;


  const textHours = Math.floor((gap % days) / hours);
  const textMinutes = Math.floor((gap % hours) / minutes);
  const textSeconds = Math.floor((gap % minutes) / seconds);

  document.querySelector(".days").innerText = remainingDays;

  document.querySelector(".hours").innerText = textHours;

  document.querySelector(".minutes").innerText = textMinutes;
  document.querySelector(".seconds").innerText = textSeconds;
  document.querySelector(".months").innerText = monthsRemaining;
};
setInterval(countdown, 1000);

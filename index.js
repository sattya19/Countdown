const backgroundImage = document.getElementById("backgroundImage");

// Define the randomBackgroundAPI variable
const randomBackgroundAPI = "your_random_background_api_url_here";

// Load the background image
backgroundImage.addEventListener("load", () => {
    backgroundImage.style.opacity = 1;
});

fetch(randomBackgroundAPI)
    .then((response) => response.json()) // Assuming the response is JSON
    .then((data) => {
        const backgroundImageEle = document.getElementById("backgroundImage");
        backgroundImageEle.setAttribute("src", data.url);
    });

const countdown = () => {
    const currentDate = new Date();
    const targetDate = new Date("April 5, 2024 00:00:00");

    const gap = targetDate - currentDate;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const textHours = String(Math.floor((gap % days) / hours)).padStart(2, "0");
    const textMinutes = String(Math.floor((gap % hours) / minutes)).padStart(2, "0");
    const textSeconds = String(Math.floor((gap % minutes) / seconds)).padStart(2, "0");

    document.querySelector(".hours").innerText = textHours;
    document.querySelector(".minutes").innerText = textMinutes;
    document.querySelector(".seconds").innerText = textSeconds;

    // Calculate months remaining
    let monthsRemaining = targetDate.getMonth() - currentDate.getMonth();
    if (monthsRemaining < 0) {
        monthsRemaining += 12; // Adjust for negative months
    }
    document.querySelector(".months").innerText = monthsRemaining;

    // Calculate remaining days
    const remainingDays = Math.floor(gap / days);
    document.querySelector(".days").innerText = remainingDays;
};

// Call the countdown function once to initialize
countdown();

// Update the countdown every 1000ms (1 second)
setInterval(countdown, 1000);

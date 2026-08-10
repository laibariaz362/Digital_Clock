const clock = document.getElementById("clock");
const date = document.getElementById("date");
const greeting = document.getElementById("greeting");
const quote = document.getElementById("quote");

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    clock.textContent = `${hours}:${minutes}:${seconds}`;

    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const dayNumber = now.getDate().toString().padStart(2, "0");
    const year = now.getFullYear();
    date.textContent = `${year}-${month}-${dayNumber} ${day}`;
    date.style.color = `rgb(${(now.getSeconds() / 60) * 255}, ${(now.getSeconds() / 60) * 255}, ${(now.getSeconds() / 60) * 255})   `;
    date.style.fontSize = `${20 + (now.getSeconds() / 60) * 10}px`;


    if (hours >= 5 && hours < 12) {
        greeting.innerText = "Good Morning ☀️";
    } else if (hours >= 12 && hours < 14) {
        greeting.innerText = "Good Afternoon 🌞";
    } else if (hours >= 14 && hours < 18) {
        greeting.innerText = "Good Evening 🌇";
    } else {
        greeting.innerText = "Good Night 🌙";
    }
}
const quotes = [
    "Every second counts.",
    "Dream Big.",
    "Never Stop Learning.",
    "Success starts with consistency.",
    "Time is your greatest asset.",
    "Small steps every day.",
    "Believe in yourself.",
    "Stay focused and never give up."
];

let currentQuoteIndex = 0;

function updateQuote() {
    quote.textContent = quotes[currentQuoteIndex];

    currentQuoteIndex =
        (currentQuoteIndex + 1) % quotes.length;
}

updateQuote();

setInterval(updateQuote, 5000);

setInterval(updateClock, 1000);
updateClock();
updateQuote();
setInterval(updateQuote, 5000); // Update quote every 5 seconds 

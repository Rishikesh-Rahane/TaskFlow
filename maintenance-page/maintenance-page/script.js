// Countdown (example: launch in 10 days)
const countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 10);

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  if (distance < 0) {
    document.querySelector(".countdown").innerHTML = "🚀 Launching Soon!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("days").textContent = days.toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
}

setInterval(updateCountdown, 1000);

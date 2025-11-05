// Simple countdown (example: 15 days from now)
const countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 15);

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  if (distance < 0) {
    document.querySelector(".countdown").innerHTML = "Launching Soon 🚀";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("days").innerText = days.toString().padStart(2, "0");
  document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
};

setInterval(updateCountdown, 1000);

// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Set the launch date and time
    const launchDate = new Date("February 8,2024 12:00:00").getTime();
  
    // Update the countdown every second
    const countdown = setInterval(function () {
      const now = new Date().getTime();
      const distance = launchDate - now;
  
      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Display the countdown
      document.querySelector(".launch-time div:nth-child(1) p").innerHTML = formatTime(days);
      document.querySelector(".launch-time div:nth-child(2) p").innerHTML = formatTime(hours);
      document.querySelector(".launch-time div:nth-child(3) p").innerHTML = formatTime(minutes);
      document.querySelector(".launch-time div:nth-child(4) p").innerHTML = formatTime(seconds);
  
      // If the countdown is over, display a message
      if (distance < 0) {
        clearInterval(countdown);
        document.querySelector(".content h1").innerHTML = "The wait is over!";
        document.querySelector(".launch-time").style.display = "none";
      }
    }, 1000);
  
    // Function to add leading zeros to single-digit numbers
    function formatTime(time) {
      return time < 10 ? "0" + time : time;
    }
  });
  
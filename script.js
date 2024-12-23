// Set the target date (January 6, 2024, at midnight)
const targetDate = new Date("January 6, 2025 00:00:00").getTime();

// Function to calculate and display the remaining time
function updateCountdown() {
    // Get the current date and time
    const currentDate = new Date().getTime();

    // Calculate the time remaining (in milliseconds)
    const timeRemaining = targetDate - currentDate;

    // Calculate days remaining
    const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    // Update the countdown text
    const countdownElement = document.getElementById('days');

    if (timeRemaining > 0) {
        countdownElement.innerHTML = `${daysRemaining} Days`; // Show remaining days
    } else {
        countdownElement.innerHTML = "<h2>Happy Birthday, My Love!</h2>"; // Show message when the date arrives
    }
}

// Call the updateCountdown function every second (1000ms)
setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately upon page load
updateCountdown();

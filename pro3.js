let totalSeconds = 0; // Stores the total seconds for the timer

// Timer display elements
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

// Function to update the timer display every second
function updateTimer() {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    hoursElement.textContent = hours < 10 ? "0" + hours : hours;
    minutesElement.textContent = minutes < 10 ? "0" + minutes : minutes;
    secondsElement.textContent = seconds < 10 ? "0" + seconds : seconds;

    totalSeconds++;
}

// Add time to the timer
function addTime() {
    const addHours = parseInt(document.getElementById("addHours").value) || 0;
    const addMinutes = parseInt(document.getElementById("addMinutes").value) || 0;
    const addSeconds = parseInt(document.getElementById("addSeconds").value) || 0;

    // Convert added time to seconds
    const addedSeconds = (addHours * 3600) + (addMinutes * 60) + addSeconds;

    // Add to totalSeconds
    totalSeconds += addedSeconds;

    // Reset input fields after adding time
    document.getElementById("addHours").value = '';
    document.getElementById("addMinutes").value = '';
    document.getElementById("addSeconds").value = '';
}

// Start the timer interval
setInterval(updateTimer, 1000);

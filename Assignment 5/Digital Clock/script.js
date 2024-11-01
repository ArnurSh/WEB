function updateClock() {
    const now = new Date(); // Get the current date and time
    const hours = String(now.getHours()).padStart(2, '0'); // Get hours and format
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Get minutes and format
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Get seconds and format
    
    // Update the clock display
    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000); // Update the clock every second
updateClock(); // Initialize the clock immediately
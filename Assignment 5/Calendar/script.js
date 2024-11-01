function updateCalendar() {
    const now = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const month = monthNames[now.getMonth()];
    const day = dayNames[now.getDay()];
    const date = now.getDate();
    const year = now.getFullYear();

    // Update the calendar elements
    document.getElementById("month").innerText = month;
    document.getElementById("day").innerText = day;
    document.getElementById("date").innerText = date;
    document.getElementById("year").innerText = year;
}

// Initialize the calendar on load
updateCalendar();

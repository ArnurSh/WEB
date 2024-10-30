function beforeNewYear(){
    let today = new Date();
    let newYear = new Date().setDate(1, 1, 2025);
    let daysBefore = (today - newYear) / (60 * 60 * 100 * 24);
    document.getElementById("dayOutput").textContent = daysBefore;
}
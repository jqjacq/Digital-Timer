setInterval(currentTime, 1000);
function currentTime() { 
    const clock = document.getElementById("clock")
    let current = new Date();
    let hours = current.getHours();
    let minutes = current.getMinutes(); 
    let seconds = current.getSeconds();
    let am_pm = "AM";

    if (hours > 12) {
        hours -= 12;
        am_pm = "PM";
    }
    if (hours == 0) {
        hours = 12;
        am_pm = "AM";
    }
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let timeNow = hours + ":" + minutes  + ":" + seconds + " " + am_pm;
    clock.innerHTML = timeNow;
}
currentTime();

function currentDate() {
    const monthDayYear = document.getElementById("date")
    let fullDate = new Date();
    let date = fullDate.getDate();
    let month = fullDate.getMonth();
    let year = fullDate.getFullYear();

    let dateStr = month + "/" + date + "/" + year;
    monthDayYear.innerHTML = dateStr;
}
currentDate();

function changeWeeks() {
    getDay()
}
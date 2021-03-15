const day = document.getElementById("days");
const hour = document.getElementById("hours");
const min = document.getElementById("mins");
const second = document.getElementById("seconds");

const countdown = () => {
    const launching = "1 Jan 2022";

    const launchingDate = new Date(launching);
    const currentDate = new Date();

    const total = (launchingDate - currentDate) / 1000;

    const days = Math.floor(total / 3600 / 24);
    const hours = Math.floor(total / 3600) % 24;
    const mins = Math.floor(total / 60) % 60;
    const seconds = Math.floor(total) % 60;

    day.innerHTML = days;
    hour.innerHTML = formatTime(hours);
    min.innerHTML = formatTime(mins);
    second.innerHTML = formatTime(seconds);
}

const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);

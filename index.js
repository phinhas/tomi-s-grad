let days = document.getElementById("days")
let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")

const countdowndate = new Date("June 14, 2022 00:00:00").getTime();
const x = setInterval(function(){

    const now = new Date().getTime();

    const distance = countdowndate - now;

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60 )) / 1000);

   days.innerHTML = d;
   hours.innerHTML = h < 10 ? "0" + h : h;
   minutes.innerHTML = m < 10 ? "0" + m : m;
   seconds.innerHTML = s < 10 ? "0" + s : s;

    if (distance < 0) {
        clearInterval(x);

        window.location.href = 'tomi.html';
    }
}, 1000);





const timer = document.querySelector(".timer");

function getDate() {
    const date = new Date();
    const curYear = date.getFullYear();
    const Dday = new Date(`${curYear}-12-25T00:00:00`);
    const distance = Dday - date;
    const distanceSecond = String(Math.floor((distance % (1000*60))/1000)).padStart(2, "0");
    const distanceMinute = String(Math.floor((distance % (1000*60*60))/(1000*60))).padStart(2, "0");
    const distanceHour = String(Math.floor((distance % (1000*60*60*24))/(1000*60*60))).padStart(2, "0");
    const distanceDate = Math.floor(distance/(1000*60*60*24));
    timer.innerHTML = `${distanceDate}d ${distanceHour}h ${distanceMinute}m ${distanceSecond}s`;
}
getDate();
setInterval(getDate, 1000);
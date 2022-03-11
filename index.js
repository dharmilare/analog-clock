const hour = document.getElementById('hr'),
minute = document.getElementById('min'),
second = document.getElementById('sec');

setInterval(()=> {
    let date = new Date();
    let hr = date.getHours() * 30;
    let min = date.getMinutes() * 6;
    let sec = date.getSeconds() * 6;

    hour.style.transform = `rotateZ(${(hr) + (min/12)}deg)`;
    minute.style.transform = `rotateZ(${(min)}deg)`;
    second.style.transform = `rotateZ(${(sec)}deg)`;
})
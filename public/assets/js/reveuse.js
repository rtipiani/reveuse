/*
Author: Rubén Tipiani
Author URL: https://facebook.com/rtipiani3
 */ 
addEventListener("load", function(){
    setTimeout(hideURLbar, 0);
}, false)
function hideURLbar(){
    window.scrollTo(0, 1);
}

(() => {
    const deadlineDate = new Date('february 01, 2023 23:59:59').getTime();

    const countdownDays = document.querySelector('.countdown__days .number');
    const countdownHours = document.querySelector('.countdown__hours .number');
    const countdownMinutes = document.querySelector('.countdown__minutes .number');
    const countdownSeconds = document.querySelector('.countdown__seconds .number');

    setInterval(() => {

        const currentDate = new Date().getTime();

        const distance = deadlineDate - currentDate;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownDays.innerHTML = days;
        countdownHours.innerHTML = hours;
        countdownMinutes.innerHTML = minutes;
        countdownSeconds.innerHTML = seconds;
        
    }, 1000);

})();
$('document').ready(function () {

    let minutes = 30;
    let seconds = 0;
    let timeLeft = minutes * 60 + seconds;
    let minutesLeft = minutes;

    setInterval(function () {
        let secondsLeft = timeLeft % 60;
        $('#countdown').html(("0" + Math.floor(minutesLeft)).slice(-2) + ":" + ("0" + Math.floor(secondsLeft)).slice(-2));
        if (timeLeft <= 300) {
            $('#countdown').css('color', '#ff0024');
        }
        if (secondsLeft === 0) minutesLeft--;
        timeLeft--;
    }, 1000);
})
;

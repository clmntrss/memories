$('document').ready(function () {

    var minutes = 30;
    var seconds = 0;
    var timeLeft = minutes * 60 + seconds;
    var minutesLeft = minutes;

    setInterval(function () {
        var secondsLeft = timeLeft % 60;
        $('#countdown').html(("0" + Math.floor(minutesLeft)).slice(-2) + ":" + ("0" + Math.floor(secondsLeft)).slice(-2));
        if (timeLeft <= 300) {
            $('#countdown').css('color', '#ff0300');
        }
        if (secondsLeft === 0) minutesLeft--;
        timeLeft--;
    }, 1000);
})
;

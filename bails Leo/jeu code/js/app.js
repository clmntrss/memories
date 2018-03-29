$('document').ready(function () {

    var minutes = 30;
    var seconds = 0;
    var timeLeft = minutes * 60 + seconds;
    var minutesLeft = minutes;

    setInterval(function () {
        let secondsLeft = timeLeft % 60;
        let countdown = $('#countdown');
        countdown.html(("0" + Math.floor(minutesLeft)).slice(-2) + ":" + ("0" + Math.floor(secondsLeft)).slice(-2));
        if (timeLeft <= 300) {
            countdown.css('color', '#ff0300');
        }
        if (secondsLeft === 0) minutesLeft--;
        timeLeft--;
    }, 1000);

    $('#btn-answer-1').on('click', function (e) {
        e.preventDefault();
        reponse = $('#input-reponse-1').val();
        if (reponse == 9) {
            $('#info-reponse-1').html('bonne réponse');
            $('#info-reponse-1').css('color', 'green');
            $(this).prop('disabled', true);
            $('#input-reponse-1').prop('disabled', true);
            $('.enigme-btn-1').css({
                background: 'radial-gradient(#00ff0088, rgba(255, 255, 255, 0) 65%)'
            });

        } else {
            $('#info-reponse-1').css('color', 'red');
            $('#info-reponse-1').html('mauvaise réponse');
        }

    });
});

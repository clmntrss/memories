$('document').ready(function () {

    var minutes = 30;
    var seconds = 0;
    var timeLeft = minutes * 60 + seconds;
    var minutesLeft = minutes;
    var gameOn = false;
    setInterval(function () {
        if (gameOn) {
            var secondsLeft = timeLeft % 60;
            $('#countdown').html(("0" + Math.floor(minutesLeft)).slice(-2) + ":" + ("0" + Math.floor(secondsLeft)).slice(-2));
            if (timeLeft <= 300) {
                $('#countdown').css('color', '#ef0000');
            }
            if (secondsLeft === 0) minutesLeft--;
            timeLeft--;
            if (timeLeft === -1) {
                gameOn = false;
                $('#gameover-overlay').css({
                    display: 'flex'
                });
            }
        }
    }, 1);

    $("#clickable").click(function () {
        $('#home').fadeOut(1000, function () {
            $('body').css({
                background: 'url("images/scene.png")',
                backgroundColor: 'black'
            });
            $('#game').css("display", "inherit");
            $('#game').fadeIn(1500);
            gameOn = true;
        });

    });

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

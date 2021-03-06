$('document').ready(function () {

    let gameOverSound = new Audio('audio/game-over.mp3');
    minutes = 30;
    let seconds = 0;
    let minutesLeft = minutes;
    let timeLeft = minutesLeft * 60 + seconds;
    let gameOn = false;
    setInterval(function () {
        if (gameOn) {
            let secondsLeft = timeLeft % 60;
            timeLeft = minutesLeft * 60 + secondsLeft;
            $('#countdown-inner').html(("0" + Math.floor(minutesLeft)).slice(-2) + ":" + ("0" + Math.floor(secondsLeft)).slice(-2));
            if (timeLeft <= 300) {
                $('#countdown').css('color', '#ef0000');
            }
            if (secondsLeft === 0) minutesLeft--;
            timeLeft--;
            if (timeLeft <= -1) {
                gameOverSound.play();
                gameOn = false;
                $('#gameover-overlay').css({
                    display: 'flex'
                });
                $.fancybox.close();
            }
        }
    }, 1000);

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
            bonneReponse('enigme-1', 9);
            closeFolder();
        } else {
            $('#info-reponse-1').css('color', 'red');
            $('#info-reponse-1').html('mauvaise réponse');
            malus();

        }
    });

    function bonneReponse(enigme, number) {
        selectedEnigme = 'digit-' + enigme;
        $('#' + selectedEnigme).css({
            backgroundImage: "url(images/" + selectedEnigme + ".png)",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
        });
        $('#' + selectedEnigme).html(number);
    }

    function closeFolder() {
        $.fancybox.close();
    }

    function malus() {
        minutesLeft--;
        $('#malus').css("display", "inherit");
        $('#malus').fadeIn(500).delay(1500).fadeOut(800);
    }
});

function playSound(file) {
    var sound = new Audio(file);
    sound.load();
    sound.play();
}
var musicPlaying = false;
var gameStarted = false;

$(document).ready(function() {
    $("#game").click(function() {
        if (!musicPlaying)
        {
            musicPlaying = true;
            var audio = new Audio('/audio/music.mp3');
            audio.play();
        }
      });

    $(".game").sparkle({
        color: "#FFFFFF",
        count: 50,
        overlap: 0,
        speed: 1,
        minSize: 4,
        maxSize: 7,
        direction: "both"
      });

    $("#game").click(function() {
        if (!gameStarted)
        {
            $(".start").fadeOut();
            gameStarted = true;
            var audio = new Audio('/audio/chime.mp3');
            audio.play();
            $("#game img.top").toggleClass("transparent");
        }
    });
});
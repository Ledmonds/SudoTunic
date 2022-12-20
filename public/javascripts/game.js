var levels = [
    {
        Level: 1,
        ImagePath: "/images/SudoTunic_Level_1.png",
        Soloution: [1,2,3,4],
        Playable: true,
    },
    {
        Level: 2,
        ImagePath: "/images/SudoTunic_Level_2.png",
        Soloution: [1,2,3,4],
        Playable: true,
    },
    {
        Level: 3,
        ImagePath: "/images/SudoTunic_Level_3.png",
        Soloution: [1,2,3,4],
        Playable: true,
    },
    {
        Level: 4,
        ImagePath: "/images/SudoTunic_EndGame.png",
        Soloution: [1,2,3,4],
        Playable: false,
    }
]

var currentLevel = 0;
var buttonsPushed = [];
var gameStarted = false;
var chime = new Audio('/audio/chime.mp3');
var currentImageSwap = "top";

$(document).ready(function() {
    $("#game").click(function() 
    {
        if (!gameStarted)
        {
            startGame();
        } else {
            stepGame();
        }
    });

    $("#game").sparkle({
        color: "#FFFFFF",
        count: 50,
        overlap: 0,
        speed: 1,
        minSize: 4,
        maxSize: 7,
        direction: "both"
      });
});

function stepGame()
{
    currentLevel++;
    $("#top").toggleClass("transparent");
    imageSwap();
}

function startGame()
{
    gameStarted = true;
    currentLevel = 1;

    $(".start").fadeOut();
    
    $("#top").toggleClass("transparent");
    imageSwap();
}

function imageSwap()
{
    var element = $("#"+currentImageSwap);
    
    setTimeout(() => {  element[0].src = levels[currentLevel].ImagePath; }, 2000);   
    
    currentImageSwap = currentImageSwap == "top" ? "bottom" : "top";
}

function playMusic()
{
    var audio = new Audio('/audio/music.mp3');
    audio.play();
}

document.addEventListener('buttonPushed', (b) => { 
    buttonsPushed.push(b);
    console.log(buttonsPushed);
 }, false);
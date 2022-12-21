var levels = [
    {
        Level: 1,
        ImagePath: "/images/SudoTunic_Level_1.png",
        Soloution: ["down", "left", "down", "right", "down"],
        Playable: true,
    },
    {
        Level: 2,
        ImagePath: "/images/SudoTunic_Level_2.png",
        Soloution: ["right", "up", "left", "up", "right", "down", "right", "up", "left", "up", "right", "down", "right", "up", "left", "up", "right"],
        Playable: true,
    },
    {
        Level: 3,
        ImagePath: "/images/SudoTunic_Level_3.png",
        Soloution: ["right", "down", "left", "down", "right", "down", "left", "down", "left", "up"],
        Playable: true,
    },
    {
        Level: 4,
        ImagePath: "/images/SudoTunic_EndGame.png",
        Soloution: [1,2,3,4],
        Playable: false,
    }
];

const target = new EventTarget();
target.addEventListener('button', puzzleCheck);

var currentLevel = 0;

var gameStarted = false;
var chime = new Audio('/audio/chime.mp3');
var currentImageSwap = "top";

$(document).ready(function() {
    $("#game").click(function() 
    {
        if (!gameStarted)
        {
            startGame();
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

function puzzleCheck()
{
    console.log("Solotuoin: " + levels[currentLevel - 1].Soloution);
    console.log("Buttons: " + buttonsPushed);
    if (buttonsPushed.length < levels[currentLevel - 1].Soloution.length)
    {
        return;
    }


    for (var i = levels[currentLevel - 1].Soloution.length; i >= 0; i--) {
        console.log(i);
        console.log("Solotuoin: " + levels[currentLevel - 1].Soloution[i-1]);
        console.log("Buttons: " + buttonsPushed[i-1]);
        if (levels[currentLevel - 1].Soloution[i-1] != buttonsPushed[i-1])
        {
            return;
        }
    } 

    chime.play();
    stepGame();
}

function stepGame()
{
    buttonsPushed = [];
    currentLevel++;
    $("#top").toggleClass("transparent");
    imageSwap();
}

function startGame()
{
    playMusic();
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
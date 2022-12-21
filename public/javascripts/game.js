var levels = [
    {
        Id: "game_start",
        ImagePath: "/images/SudoTunic_Level_1.png",
        Soloution: null,
        Playable: false,
    },
    {
        Id: "level_1",
        ImagePath: "/images/SudoTunic_Level_1.png",
        Soloution: ["down", "left", "down", "right", "down"],
        Playable: true,
    },
    {
        Id: "level_2",
        ImagePath: "/images/SudoTunic_Level_2.png",
        Soloution: ["right", "up", "left", "up", "right", "down", "right", "up", "left", "up", "right", "down", "right", "up", "left", "up", "right"],
        Playable: true,
    },
    {
        Id: "level_3",
        ImagePath: "/images/SudoTunic_Level_3.png",
        Soloution: ["right", "down", "left", "down", "right", "down", "left", "down", "left", "up"],
        Playable: true,
    },
    {
        Id: "game_end",
        ImagePath: "/images/SudoTunic_EndGame.png",
        Soloution: null,
        Playable: false,
    }
];

// Globals
var button_event = new EventTarget();
button_event.addEventListener('button_event', startGame);

var dpad_event = new EventTarget();
dpad_event.addEventListener('dpad_event', puzzleCheck);

var currentLevel = 0;
var gameStarted = false;

var music = new Audio('/audio/music.mp3');
var chime = new Audio('/audio/chime.mp3');

// Page Load
$(document).ready(function() {
    $(document).on('touchstart', function() {
        music.loop = true;
        music.play();
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

// Functions
function startGame()
{
    if (gameStarted)
    {
        return;
    }

    $(".start").fadeOut();
    
    gameStarted = true;
    stepGame();
}

// Reset inputs and step the game a sinlge level.
function stepGame()
{ 
    chime.play();
    chime.play();
    chime.play();
    buttonsPushed = [];
    $("#"+levels[currentLevel].Id).toggleClass("transparent");
    currentLevel++;
}

function puzzleCheck()
{
    if (!levels[currentLevel].Playable)
    {
        return;
    }

    // Not even enough buttons pushed for this solution to be correct.
    if (buttonsPushed.length < levels[currentLevel].Soloution.length)
    {
        return;
    }

    console.log(levels[currentLevel]);

    // Grabbing sliced buttonsPushed as we know the last button pushed minus the sol length is our potential soloution to compre 
    var levelSoloution = levels[currentLevel].Soloution;
    var userSoloution = buttonsPushed.slice(buttonsPushed.length - levelSoloution.length, buttonsPushed.length);

    console.log("Level: " + levelSoloution.toString());
    console.log("Input: " + userSoloution.toString());
    
    if (levelSoloution.toString() !== userSoloution.toString())
    {
        return;
    }

    stepGame();
}
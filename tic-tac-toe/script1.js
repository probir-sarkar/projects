// use restrict in js

let player = true;
// if playBtn is clicked jQuery
// Player Change on start
let playerChangable = true;

// Click audio
let clickAudio = new Audio("human.wav");

$(".playBtn").click(function () {
    // Play Click audio
    clickAudio.play();
    if (player === true) {
        $(this).text("X").attr("disabled", true);
        setTimeout(function () {
            $.fn.checkResult();
        }, 100);
        $("#player1").attr("disabled", true);
        $("#player2").attr("disabled", false);
    } else {
        $(this).text("O").attr("disabled", true);
        setTimeout(function () {
            $.fn.checkResult();
        }, 100);
        $("#player2").attr("disabled", true);
        $("#player1").attr("disabled", false);
    }
    player = !player;
    playerChangable = !playerChangable;

});

// jQuery function to check if the game is over
$.fn.checkResult = function () {
    // (".playBtn")[0] to (".playBtn")[8] store in array
    let playBtnArray = [
        $(".playBtn")[0].innerHTML,
        $(".playBtn")[1].innerHTML,
        $(".playBtn")[2].innerHTML,
        $(".playBtn")[3].innerHTML,
        $(".playBtn")[4].innerHTML,
        $(".playBtn")[5].innerHTML,
        $(".playBtn")[6].innerHTML,
        $(".playBtn")[7].innerHTML,
        $(".playBtn")[8].innerHTML
    ];
    // Log array    
    console.log(playBtnArray);
    if (
        (playBtnArray[0] == "X" && playBtnArray[1] == "X" && playBtnArray[2] == "X") ||
        (playBtnArray[3] == "X" && playBtnArray[4] == "X" && playBtnArray[5] == "X") ||
        (playBtnArray[6] == "X" && playBtnArray[7] == "X" && playBtnArray[8] == "X") ||
        (playBtnArray[0] == "X" && playBtnArray[3] == "X" && playBtnArray[6] == "X") ||
        (playBtnArray[1] == "X" && playBtnArray[4] == "X" && playBtnArray[7] == "X") ||
        (playBtnArray[2] == "X" && playBtnArray[5] == "X" && playBtnArray[8] == "X") ||
        (playBtnArray[0] == "X" && playBtnArray[4] == "X" && playBtnArray[8] == "X") ||
        (playBtnArray[2] == "X" && playBtnArray[4] == "X" && playBtnArray[6] == "X")
    ) {
        $.fn.resetGame("one");
    } else if (
        (playBtnArray[0] == "O" && playBtnArray[1] == "O" && playBtnArray[2] == "O") ||
        (playBtnArray[3] == "O" && playBtnArray[4] == "O" && playBtnArray[5] == "O") ||
        (playBtnArray[6] == "O" && playBtnArray[7] == "O" && playBtnArray[8] == "O") ||
        (playBtnArray[0] == "O" && playBtnArray[3] == "O" && playBtnArray[6] == "O") ||
        (playBtnArray[1] == "O" && playBtnArray[4] == "O" && playBtnArray[7] == "O") ||
        (playBtnArray[2] == "O" && playBtnArray[5] == "O" && playBtnArray[8] == "O") ||
        (playBtnArray[0] == "O" && playBtnArray[4] == "O" && playBtnArray[8] == "O") ||
        (playBtnArray[2] == "O" && playBtnArray[4] == "O" && playBtnArray[6] == "O")
    ) {
        $.fn.resetGame("two");
    } else if (
        (playBtnArray[0] != "" && playBtnArray[1] != "" && playBtnArray[2] != "") &&
        (playBtnArray[3] != "" && playBtnArray[4] != "" && playBtnArray[5] != "") &&
        (playBtnArray[6] != "" && playBtnArray[7] != "" && playBtnArray[8] != "")
    ) {
        $.fn.resetGame("draw");
    }
    // Display the result
};

$.fn.resetGame = function (win) {
    if (win == "one") {
        $("#result").text("Player 1 wins!");
        player = true;
        player1Score += 1;
        $("#player2").attr("disabled", true);
        $("#player1").attr("disabled", false);

    } else if (win == "two") {
        $("#result").text("Player 2 wins!");
        player = false;
        player2Score += 1;
        $("#player1").attr("disabled", true);
        $("#player2").attr("disabled", false);
    } else if (win == "draw") {
        $("#result").text("Draw!");
    }
    // #overlay visibility to visible
    $("#overlay").css("visibility", "visible");
    // #refresh onclick reset the game
    $.fn.updateScore();
}





// Score of players
let player1Score = 0;
let player2Score = 0;

$.fn.updateScore = function (win) {
    // playerOne innerHTML to playerOneScore
    $("#playerOne").text(player1Score);
    // playerTwo innerHTML to playerTwoScore
    $("#playerTwo").text(player2Score);
}
// Document ready
$(document).ready(function () {
    $("#refresh").click(function () {
        $(".playBtn").text("").attr("disabled", false);
        $("#overlay").css("visibility", "hidden");
    });
    $("#reset").click(function () {
        $(".playBtn").text("").attr("disabled", false);
        $("#overlay").css("visibility", "hidden");
        player1Score = 0;
        player2Score = 0;
        $.fn.updateScore();
        player = true;
        playerChangable = true;
        $("#player1").attr("disabled", false);
        $("#player2").attr("disabled", false);
    });
    // Call updateScore function on page load
    $.fn.updateScore();
});


$("document").ready(function () {
    $("#player1").click(function () {
        if (playerChangable) player = true;
        else alert("You can't change player now!");
    }
    );
    $("#player2").click(function () {
        if (playerChangable) player = false;
        else alert("You can't change player now!");
    }
    );
});


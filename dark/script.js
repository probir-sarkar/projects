/* Table backup*/
let gameTable = document.querySelector("#gameTable").innerHTML;
console.log(gameTable);
/*End of Table Backup*/
/*Session Storage*/
let playerOneCount = 0
let playerTwoCount = 0
let drawCount = 0
/*End of Session Storage*/

/*Audio file
let human = new Audio("human.wav");
let robot = new Audio("robot.wav");
robot.load();
human.load();
/*End of audio file*/

/*Player Determination*/
//Onload Default player Determinitation
let player = "X";

// Notification Button Clicked
let clicked = false;
function typeX() {
  if (clicked == false) {
    player = "X";
  }
}
function typeO() {
  if (clicked == false) {
    player = "O";
  }
}

/* End of Player Determination */

/* Passing Condition */
const checkResult = () => {
  ck = idArrayInnerHtml;
  let [a, b, c, d, e, f, g, h, i] = [
    ck[0],
    ck[1],
    ck[2],
    ck[3],
    ck[4],
    ck[5],
    ck[6],
    ck[7],
    ck[8],
  ];
  if (
    (a == "X" && b == "X" && c == "X") ||
    (d == "X" && e == "X" && f == "X") ||
    (g == "X" && h == "X" && i == "X") ||
    (a == "X" && d == "X" && g == "X") ||
    (b == "X" && e == "X" && h == "X") ||
    (c == "X" && f == "X" && i == "X") ||
    (a == "X" && e == "X" && i == "X") ||
    (c == "X" && e == "X" && g == "X")
  ) {
    overlay("Player 1 Win");
    playerOneCount = playerOneCount + 1;
  } else if (
    (a == "O" && b == "O" && c == "O") ||
    (d == "O" && e == "O" && f == "O") ||
    (g == "O" && h == "O" && i == "O") ||
    (a == "O" && d == "O" && g == "O") ||
    (b == "O" && e == "O" && h == "O") ||
    (c == "O" && f == "O" && i == "O") ||
    (a == "O" && e == "O" && i == "O") ||
    (c == "O" && e == "O" && g == "O")
  ) {
    overlay("Player 2 Win");
    playerTwoCount = playerTwoCount + 1;
  } else {
    if (count == 0) {
      overlay("draw");
      drawCount = drawCount + 1;
    }
  }
};
/* End Of Passing Condition*/
const overlay = (result) => {
  document.getElementById("result").innerHTML = result;
  document.getElementById("overlay").style.visibility = "visible";
};

const btnClicked = (btn) => {
  count--;
  document.getElementById("result").innerHTML = "Playing....";
  //human.play();
  btn.disabled = true;
  let position = idArrayInnerHtml.indexOf(btn.id);
  idArrayInnerHtml.splice(position, 1, player);
  btn.innerHTML = player;
  xy();
  checkResult();
  clicked = true;
};
const xy = () => {
  if (player == "X") {
    document.getElementById("player1").disabled = true;
    document.getElementById("player2").disabled = false;
    player = "O";
  } else if (player == "O") {
    document.getElementById("player1").disabled = false;
    document.getElementById("player2").disabled = true;
    player = "X";
  }
};

let count = 9;

/*Refresh And Reset */
let refresh = document.querySelector("#refresh");

let reset = document.querySelector("#reset");
refresh.onclick = () => {
  idArrayInnerHtml = [];
  count = 9;
  document.getElementById("overlay").style.visibility = "hidden";
  document.querySelector("#gameTable").innerHTML = gameTable;
  reloadPage();
};
reset.onclick = () => {
  sessionStorage.clear();
  location.reload(true);
};
/* Fetch Game Data*/
let idArrayInnerHtml = [];
function reloadPage() {
  document.getElementById("playerOne").innerHTML = playerOneCount;
  document.getElementById("playerTwo").innerHTML = playerTwoCount;
  for (i = 1; i <= 9; i++) {
    eval("let btn" + i + "= document.querySelector(`#btn${i}`)");
    eval("idArrayInnerHtml.push(`btn${i}`)");
    eval("btn" + i + ".onclick = () => btnClicked(btn" + i + ")");
  }
}
reloadPage();
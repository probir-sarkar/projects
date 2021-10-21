let gameTable = document.querySelector("#gameTable").innerHTML;
console.log(gameTable);


/*Session Storage*/
let playerOneCount = JSON.parse(sessionStorage.getItem("playerOneCount"));
let playerTwoCount = JSON.parse(sessionStorage.getItem("playerTwoCount"));
let drawCount = JSON.parse(sessionStorage.getItem("drawCount"));
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
    sessionStorage.setItem("playerOneCount", JSON.stringify(playerOneCount));
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
    sessionStorage.setItem("playerTwoCount", JSON.stringify(playerTwoCount));
  } else {
    if (count == 0) {
      overlay("draw");
      drawCount = drawCount + 1;
      sessionStorage.setItem("drawCount", JSON.stringify(drawCount));
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

if (playerOneCount == null) {
  document.getElementById("playerOne").innerHTML = "0";
} else {
  document.getElementById("playerOne").innerHTML = playerOneCount;
}
if (playerTwoCount == null) {
  document.getElementById("playerTwo").innerHTML = "0";
} else {
  document.getElementById("playerTwo").innerHTML = playerTwoCount;
}

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
  for (i = 1; i <= 9; i++) {
    eval("let btn" + i + "= document.querySelector(`#btn${i}`)");
    eval("idArrayInnerHtml.push(`btn${i}`)");
    eval("btn" + i + ".onclick = () => btnClicked(btn" + i + ")");
  }
}
reloadPage();

/* Backup Code*/
/*
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");
let btn7 = document.querySelector("#btn7");
let btn8 = document.querySelector("#btn8");
let btn9 = document.querySelector("#btn9");
*/
//Save Button Data in array then change is as button clicked, It will help to determine result
/*
let idArrayInnerHtml = [
  btn1.innerHTML,
  btn2.innerHTML,
  btn3.innerHTML,
  btn4.innerHTML,
  btn5.innerHTML,
  btn6.innerHTML,
  btn7.innerHTML,
  btn8.innerHTML,
  btn9.innerHTML,
];*/
/*End of Fetch Game Data */

/*
btn1.onclick = () => btnClicked(btn1);
btn2.onclick = () => btnClicked(btn2);
btn3.onclick = () => btnClicked(btn3);
btn4.onclick = () => btnClicked(btn4);
btn5.onclick = () => btnClicked(btn5);
btn6.onclick = () => btnClicked(btn6);
btn7.onclick = () => btnClicked(btn7);
btn8.onclick = () => btnClicked(btn8);
btn9.onclick = () => btnClicked(btn9);
*/

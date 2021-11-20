//Session

function setName() {
  var name = document.querySelectorAll(".tHead");
  var testArray = [
    name[0].innerHTML,
    name[1].innerHTML,
    name[2].innerHTML,
    name[3].innerHTML,
  ];
  window.sessionStorage.setItem("names", JSON.stringify(testArray));
}

function saveResult() {
  var result = document.querySelectorAll(".find");
  var resultArray = [
    result[0].innerHTML,
    result[1].innerHTML,
    result[2].innerHTML,
    result[3].innerHTML,
  ];
  window.sessionStorage.setItem("result", JSON.stringify(resultArray));
}
//End of session

function myFunction() {
  var table = document.getElementById("myTable");
  var rowCount = table.rows.length - 1;
  var row = table.insertRow(rowCount);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML =
    '<input onblur="findResult(firstRow,0)" type="number" name="firstRow">';
  cell2.innerHTML =
    '<input onblur="findResult(secondRow,1)" type="number" name="secondRow" >';
  cell3.innerHTML =
    '<input onblur="findResult(thirdRow,2)" type="number" name="thirdRow" >';
  cell4.innerHTML =
    '<input onblur="findResult(fourthRow,3)" type="number" name="fourthRow" >';
}
for (i = 0; i < 6; i++) {
  myFunction();
}

function findResult(arr, result) {
  var table = document.querySelector("#myTable");
  console.log(table.rows[1].cells[0].getElementsByTagName("input")[0].value);
  var array = document.querySelectorAll(".find");
  var total = 0;
  arr.forEach((element) => {
    if (!isNaN(parseFloat(element.value))) {
      total += parseFloat(element.value);
    }
  });
  array[result].innerHTML = total;
  saveResult();
  return ResultOut();
}

function ResultOut() {
  arr = document.querySelectorAll(".find");
  result = document.querySelectorAll(".resultOut");
  console.log(arr[0].innerHTML);
  var arrTotal = [
    arr[0].innerHTML,
    arr[1].innerHTML,
    arr[2].innerHTML,
    arr[3].innerHTML,
  ];
  var sortTotal = [
    arr[0].innerHTML,
    arr[1].innerHTML,
    arr[2].innerHTML,
    arr[3].innerHTML,
  ];
  sortTotal.sort(function (a, b) {
    return b - a;
  });
  for (i = 0; i < 4; i++) {
    if (arrTotal[i] == sortTotal[0]) {
      result[i].innerHTML = "First";
    } else if (arrTotal[i] == sortTotal[1]) {
      result[i].innerHTML = "Second";
    } else if (arrTotal[i] == sortTotal[2]) {
      result[i].innerHTML = "Third";
    } else if (arrTotal[i] == sortTotal[3]) {
      result[i].innerHTML = "Fourth";
    }
  }
}

function reFresh() {
  var name = document.querySelectorAll(".tHead");
  var storedArray = JSON.parse(sessionStorage.getItem("names"));
  var table = document.querySelector("#myTable");
  var resultArray = JSON.parse(sessionStorage.getItem("result"));
  if (storedArray != null) {
    for (i = 0; i < 4; i++) {
      name[i].innerHTML = storedArray[i];
    }
  }
  if (resultArray != null) {
    for (i = 0; i < 4; i++) {
      table.rows[1].cells[i].getElementsByTagName("input")[0].value =
        resultArray[i];
    }
  }
}
reFresh();


function reset() {
  sessionStorage.clear();
  location.reload();
}
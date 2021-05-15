var myData;
//parti in cui è sudiviso ogni brano
var totParti = 6;
//numero di brani presenti nel database
var totBrani;

var myPar1 = document.querySelector('#par1');
var myPar2 = document.querySelector('#par2');
var myPar3 = document.querySelector('#par3');
var myPar4 = document.querySelector('#par4');
var myPar5 = document.querySelector('#par5');
var myPar6 = document.querySelector('#par6');


function preload() {
  myData = loadJSON("./database.json");
}

function setup() {
  totBrani = myData.exercises.length;
  noCanvas();
}

function generatePar1(exNum) {
  var rndNum;
  if (exNum === undefined)
  {
    rndNum = round(random(0, totBrani-1));
  }
  else {
    if (exNum > totBrani){
      exNum = totBrani;
    } else if (exNum < 1) {
      exNum = 1;
    }
    rndNum = exNum - 1;
  }

  if (myData.exercises[rndNum][1] === undefined) {
    myPar1.innerHTML = '///';
  } else {
    myPar1.innerHTML = myData.exercises[rndNum][1];
  }
  document.querySelector('#input1').value = rndNum + 1;
}

function generatePar2(exNum) {
  var rndNum;
  if (exNum === undefined)
  {
    rndNum = round(random(0, totBrani-1));
  }
  else {
    if (exNum > totBrani){
      exNum = totBrani;
    } else if (exNum < 1) {
      exNum = 1;
    }
    rndNum = exNum - 1;
  }

  if (myData.exercises[rndNum][2] === undefined) {
    myPar2.innerHTML = '///';
  } else {
    myPar2.innerHTML = myData.exercises[rndNum][2];
  }
  document.querySelector('#input2').value = rndNum + 1;
}

function generatePar3(exNum) {
  var rndNum;
  if (exNum === undefined)
  {
    rndNum = round(random(0, totBrani-1));
  }
  else {
    if (exNum > totBrani){
      exNum = totBrani;
    } else if (exNum < 1) {
      exNum = 1;
    }
    rndNum = exNum - 1;
  }

  if (myData.exercises[rndNum][3] === undefined) {
    myPar3.innerHTML = '///';
  } else {
    myPar3.innerHTML = myData.exercises[rndNum][3];
  }
  document.querySelector('#input3').value = rndNum + 1;
}

function generatePar4(exNum) {
  var rndNum;
  if (exNum === undefined)
  {
    rndNum = round(random(0, totBrani-1));
  }
  else {
    if (exNum > totBrani){
      exNum = totBrani;
    } else if (exNum < 1) {
      exNum = 1;
    }
    rndNum = exNum - 1;
  }
  if (myData.exercises[rndNum][4] === undefined) {
    myPar4.innerHTML = '///';
  } else {
    myPar4.innerHTML = myData.exercises[rndNum][4];
  }
  document.querySelector('#input4').value = rndNum + 1;
}

function generatePar5(exNum) {
  var rndNum;
  if (exNum === undefined)
  {
    rndNum = round(random(0, totBrani-1));
  }
  else {
    if (exNum > totBrani){
      exNum = totBrani;
    } else if (exNum < 1) {
      exNum = 1;
    }
    rndNum = exNum - 1;
  }
  if (myData.exercises[rndNum][5] === undefined) {
    myPar5.innerHTML = '///';
  } else {
    myPar5.innerHTML = myData.exercises[rndNum][5];
  }
  document.querySelector('#input5').value = rndNum + 1;
}

function generatePar6(exNum) {
  var rndNum;
  if (exNum === undefined)
  {
    rndNum = round(random(0, totBrani-1));
  }
  else {
    if (exNum > totBrani){
      exNum = totBrani;
    } else if (exNum < 1) {
      exNum = 1;
    }
    rndNum = exNum - 1;
  }
  if (myData.exercises[rndNum][6] === undefined) {
    myPar6.innerHTML = '///';
  } else {
    myPar6.innerHTML = myData.exercises[rndNum][6];
  }
  document.querySelector('#input6').value = rndNum + 1;
}

function generateAllPar() {
  generatePar1();
  generatePar2();
  generatePar3();
  generatePar4();
  generatePar5();
  generatePar6();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    generateAllPar();
  }
}

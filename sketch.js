var myData;
//parti in cui è sudiviso ogni brano
var totParti = 6;
//numero di brani presenti nel database
var totBrani;

//get the <p> of the Exercise
var myPar1 = document.querySelector('#par1');
var myPar2 = document.querySelector('#par2');
var myPar3 = document.querySelector('#par3');
var myPar4 = document.querySelector('#par4');
var myPar5 = document.querySelector('#par5');
var myPar6 = document.querySelector('#par6');

//get the input
var myInput1 = document.querySelector('#input1');
var myInput2 = document.querySelector('#input2');
var myInput3 = document.querySelector('#input3');
var myInput4 = document.querySelector('#input4');
var myInput5 = document.querySelector('#input5');
var myInput6 = document.querySelector('#input6');

//get the sliders
var mySlider1 = document.querySelector('#slider1');
var mySlider2 = document.querySelector('#slider2');
var mySlider3 = document.querySelector('#slider3');
var mySlider4 = document.querySelector('#slider4');
var mySlider5 = document.querySelector('#slider5');
var mySlider6 = document.querySelector('#slider6');

//get the <p> TITLE of the Exercise
var myExerciseTitle = document.querySelector('#exercise-title');

var overlayDiv = document.querySelector('#overlay');


function preload() {
  myData = loadJSON("./database.json");
}

function setup() {
  totBrani = myData.exercises.length;
  noCanvas();
  generateAllPar();
  createLegenda();
}

function generatePar1(exNum) {
  var rndNum;
  if (exNum === undefined) {
    rndNum = round(random(0, totBrani - 1));
  } else {
    if (exNum > totBrani) {
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
  document.querySelector('#slider1').value = rndNum + 1;
  generateTitle();
}

function generatePar2(exNum) {
  var rndNum;
  if (exNum === undefined) {
    rndNum = round(random(0, totBrani - 1));
  } else {
    if (exNum > totBrani) {
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
  document.querySelector('#slider2').value = rndNum + 1;
  generateTitle();
}

function generatePar3(exNum) {
  var rndNum;
  if (exNum === undefined) {
    rndNum = round(random(0, totBrani - 1));
  } else {
    if (exNum > totBrani) {
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
  document.querySelector('#slider3').value = rndNum + 1;
  generateTitle();
}

function generatePar4(exNum) {
  var rndNum;
  if (exNum === undefined) {
    rndNum = round(random(0, totBrani - 1));
  } else {
    if (exNum > totBrani) {
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
  document.querySelector('#slider4').value = rndNum + 1;
  generateTitle();
}

function generatePar5(exNum) {
  var rndNum;
  if (exNum === undefined) {
    rndNum = round(random(0, totBrani - 1));
  } else {
    if (exNum > totBrani) {
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
  document.querySelector('#slider5').value = rndNum + 1;
  generateTitle();
}

function generatePar6(exNum) {
  var rndNum;
  if (exNum === undefined) {
    rndNum = round(random(0, totBrani - 1));
  } else {
    if (exNum > totBrani) {
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
  document.querySelector('#slider6').value = rndNum + 1;
  generateTitle();
}

function generateAllPar() {
  generatePar1();
  generatePar2();
  generatePar3();
  generatePar4();
  generatePar5();
  generatePar6();

  generateTitle();
}

function generateTitle() {
  myExerciseTitle.innerHTML = 'Exercise #' + myInput1.value + '' + myInput2.value + '' + myInput3.value + '' + myInput4.value + '' + myInput5.value + '' + myInput6.value;
}

function overlayOn() {
  overlayDiv.style.display = "block";
}

function overlayOff() {
  overlayDiv.style.display = "none";
}

function createLegenda() {
  var ul = document.getElementById("elenco-legenda");

  for (i = 0; i < myData.exercises.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = myData.exercises[i]["Esercizio"] + " " + myData.exercises[i]["Title"];
    ul.appendChild(li);
  }
}


function doCapture() {
  window.scrollTo(0, 0);

  var title = document.querySelector('#exercise-title').innerHTML;

  myPar1.appendChild(document.createElement('br'));
  myPar2.appendChild(document.createElement('br'));
  myPar3.appendChild(document.createElement('br'));
  myPar4.appendChild(document.createElement('br'));
  myPar5.appendChild(document.createElement('br'));
  myPar6.appendChild(document.createElement('br'));

  // Convert the div to image (canvas)
  html2canvas(document.getElementById("parContainer")).then(function(canvas) {

    canvas.toBlob(function(blob) {
      saveAs(blob, title + ".png");
    });

  });

  myPar1.removeChild(myPar1.childNodes[1]);
  myPar2.removeChild(myPar2.childNodes[1]);
  myPar3.removeChild(myPar3.childNodes[1]);
  myPar4.removeChild(myPar4.childNodes[1]);
  myPar5.removeChild(myPar5.childNodes[1]);
  myPar6.removeChild(myPar6.childNodes[1]);
}

// function saveExercise() {
//   var myExercise = document.querySelector('#parContainer');
//
//   var ctx = myExercise.getContext('2d');
//   myExercise.save('myExercise', 'png');
// }


// function shareFb() {
//   window.scrollTo(0, 0);
//
//   var title = document.querySelector('#exercise-title').innerHTML;
//
//   myPar1.appendChild(document.createElement('br'));
//   myPar2.appendChild(document.createElement('br'));
//   myPar3.appendChild(document.createElement('br'));
//   myPar4.appendChild(document.createElement('br'));
//   myPar5.appendChild(document.createElement('br'));
//   myPar6.appendChild(document.createElement('br'));
//
//   // Convert the div to image (canvas)
//   html2canvas(document.getElementById("parContainer")).then(function(canvas) {
//
//     canvas.toBlob(function(blob) {
//       let imageUrl = URL.createObjectURL(blob);
//       let myImgFb = document.querySelector('#test-img');
//       myImgFb.src = imageUrl;
//
//       fbs_click(myImgFb, imageUrl);
//       console.log(imageUrl);
//
//       // fbShareAngular(blob);
//       myImgFb.src = " ";
//
//     });
//   });
//
//   myPar1.removeChild(myPar1.childNodes[1]);
//   myPar2.removeChild(myPar2.childNodes[1]);
//   myPar3.removeChild(myPar3.childNodes[1]);
//   myPar4.removeChild(myPar4.childNodes[1]);
//   myPar5.removeChild(myPar5.childNodes[1]);
//   myPar6.removeChild(myPar6.childNodes[1]);
// }


// function fbShareAngular(blob) {
//   var fd = new FormData();
//   fd.append('access_token', $scope.facebook.authToken);
//   fd.append('source', blob);
//   fd.append('message', $scope.canvas.background.getCaption());
//
//
//   $http.post('https://graph.facebook.com/me/photos?access_token=' + $scope.facebook.authToken, fd, {
//     transformRequest: angular.identity,
//     headers: {
//       'Content - Type': undefined
//     }
//   })
// .success(function(res) {})
//   .error(function(res) {});
// }


// function fbs_click(TheImg, u) {
//   // u=TheImg.src;
//   // t=document.title;
//   t = TheImg.getAttribute('alt');
//   window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(u) + '&t=' + encodeURIComponent(t), 'sharer', 'toolbar=0,status=0,width=626,height=436');
//   return false;
// }

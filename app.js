/*console.log("h");
const homes = document.querySelectorAll(".home");
const scoreBoard = document.querySelector(".score");
const mans = document.querySelectorAll(".man");
var btn = document.getElementById("btn-start");
//console.log(homes);
let lastHome;
let timeUp = false;
let score = 0;
let popValueOne, popValueTwo, setTimeoutValue;
let secondLevel = false;​​​
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}​
function randomHome(homes) {
  // console.log(homes.length);
  const index = Math.floor(Math.random() * homes.length);
  // console.log(index);
  const home = homes[index];
  // console.log(home);
  if (home === lastHome) {
    return randomHome(homes);
  }
  lastHome = home;
  return home;
}​
function startGame() {
  time();
  btn.style.visibility = "hidden";
  //document.getElementById("button").style.visibility = "hidden";
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  popValueOne = 800;
  popValueTwo = 1000;
  pop();
  setTimeoutValue = 20000;
  setTimeout(() => (timeUp = true), setTimeoutValue);
  //document.getElementById("btn-start").style.visibility = "visible";
}​
function nextLevel() {
  secondLevel = true;
  time();
  btn.style.visibility = "hidden";
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  popValueOne = 400;
  popValueTwo = 1000;
  pop();
  setTimeoutValue = 10000;
  setTimeout(() => (timeUp = true), setTimeoutValue);​
}​​
function pop() {
  const time = randomTime(popValueOne, popValueTwo);
  const home = randomHome(homes);
  home.classList.add("up");
  setTimeout(() => {
    home.classList.remove("up");
    if (!timeUp) {
      pop();
    }
  }, time);
}​
function onHit(e) {
  // Console.log(e);
  if (!e.isTrusted) return;
  score++;
  // mans.style.visibility = 'hidden';
  this.parentNode.classList.remove("up");
  scoreBoard.textContent = score;
}
mans.forEach((man) => man.addEventListener("click", onHit));​
function time() {
  var CountDown_Time = 20;
  if (secondLevel == true) {
    CountDown_Time = 10;
  }
  var timerId = setInterval(timer, 1000);​
  function timer() {
    if (CountDown_Time == -1)
      clearInterval(timerId);
    else {
      document.getElementById("timer").innerHTML =
        "Timer" + ":" + CountDown_Time;
      // document.getElementById("btn-start").innerHTML="Timer" + ":" + CountDown_Time;
      CountDown_Time--;
      // startGame();
    }
    if (CountDown_Time == 0) {
      document.getElementById("button").style.visibility = "visible";
    }
  }​​
}
// startGame();
​
function reload() {
  // location.reload(true);
  startGame();
}*/
console.log("a");
const homes = document.querySelectorAll(".home");
const scoreBoard = document.querySelector(".score");
const mans = document.querySelectorAll(".man");
var btn = document.getElementById("btn-start");
var replay = document.getElementById("button");
var butn = document.getElementById("btn-next");
//console.log(homes);
let lastHome;
let timeUp = false;
let score = 0;
let popValueOne, popValueTwo, setTimeoutValue;
let secondLevel = false;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHome(homes) {
  // console.log(homes.length);
  const index = Math.floor(Math.random() * homes.length);
  // console.log(index);
  const home = homes[index];
  // console.log(home);
  if (home === lastHome) {
    return randomHome(homes);
  }
  lastHome = home;
  return home;
}

function startGame() {
  time();
  btn.style.visibility = "hidden";
  //document.getElementById("button").style.visibility = "hidden";
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  popValueOne = 500;
  popValueTwo = 1000;
  pop();
  setTimeoutValue = 20000;
  setTimeout(() => (timeUp = true), setTimeoutValue);
  //document.getElementById("btn-start").style.visibility = "visible";
}

function nextLevel() {
  secondLevel = true;
  time();
  btn.style.visibility = "hidden";
  // replay.style.visibility = "hidden";
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  popValueOne = 400;
  popValueTwo = 1000;
  pop();
  setTimeoutValue = 10000;
  setTimeout(() => (timeUp = true), setTimeoutValue);
  // document,getElementById("button").style.visibility="hidden";
}

function pop() {
  const time = randomTime(popValueOne, popValueTwo);
  const home = randomHome(homes);
  home.classList.add("up");

  makeSound();

  function makeSound() {
    var sound = new Audio('/images/censoredbeep.mp3');
    sound.play();
  }
  setTimeout(() => {
    home.classList.remove("up");
    if (!timeUp) {
      pop();
    }
  }, time);
}

function onHit(e) {
  // Console.log(e);
  if (!e.isTrusted) return;
  score++;
  // mans.style.visibility = 'hidden';
  this.parentNode.classList.remove("up");
  scoreBoard.textContent = score;
}
mans.forEach((man) => man.addEventListener("click", onHit));

function time() {
  var CountDown_Time = 20;
  if (secondLevel == true) {
    CountDown_Time = 10;
  }
  var timerId = setInterval(timer, 1000);

  function timer() {
    if (CountDown_Time == -1)
      clearInterval(timerId);
    else {
      document.getElementById("timer").innerHTML =
        "Timer" + ":" + CountDown_Time;
      // document.getElementById("btn-start").innerHTML="Timer" + ":" + CountDown_Time;
      CountDown_Time--;
      // startGame();
    }
    if (CountDown_Time == 0) {
      document.getElementById("button").style.visibility = "visible";
    }
  }
}
// startGame();
function reload() {
  // location.reload(true);
  startGame();
}
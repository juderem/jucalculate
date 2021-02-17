"use strict";

document.getElementById('reset').addEventListener("click", function (event) {
  document.getElementById('screen').value = 0;
});
var num1;
var num2;
var activeOperator;
var decimel;
document.getElementById('plus').addEventListener("click", function (event) {
  num1 = screen.value;
  activeOperator = '+';
  screen.value = screen.value + activeOperator;
});
document.getElementById('minus').addEventListener("click", function (event) {
  num1 = screen.value;
  activeOperator = "-";
  screen.value = screen.value + activeOperator;
});
document.getElementById('mult').addEventListener("click", function (event) {
  num1 = screen.value;
  activeOperator = "*";
  screen.value = screen.value + activeOperator;
});
document.getElementById('divide').addEventListener("click", function (event) {
  num1 = screen.value;
  activeOperator = "/";
  screen.value = screen.value + activeOperator;
});
document.getElementById('equals').addEventListener("click", function (event) {
  console.log(screen.value);
  var result = eval(screen.value);
  console.log(result);
  screen.value = result;
});
document.getElementById('dot').addEventListener("click", function (event) {
  num1 = screen.value;
  decimal = ".";
  screen.value = num1 + decimal;
});
var screen = document.getElementById('screen');
var seven = document.getElementById('seven');
var four = document.getElementById('four');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var five = document.getElementById('five');
var six = document.getElementById('six');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var zero = document.getElementById('zero');
zero.addEventListener("click", function (event) {
  if (screen.value == 0) {
    screen.value = event.target.value;
  } else {
    screen.value += event.target.value;
  }
});
one.addEventListener("click", function (event) {
  if (screen.value == 0) {
    screen.value = event.target.value;
  } else {
    screen.value += event.target.value;
  }
});
two.addEventListener("click", function (event) {
  if (screen.value == 0) {
    screen.value = event.target.value;
  } else {
    screen.value += event.target.value;
  }
});
three.addEventListener("click", function (event) {
  if (screen.value == 0) {
    screen.value = event.target.value;
  } else {
    screen.value += event.target.value;
  }
});
four.addEventListener("click", function (event) {
  if (screen.value == 0) {
    screen.value = event.target.value;
  } else {
    screen.value += event.target.value;
  }
});
five.addEventListener("click", function (event) {
  if (screen.value == 0) {
    screen.value = event.target.value;
  } else {
    screen.value += event.target.value;
  }
});
six.addEventListener("click", function (event) {
  if (screen.value == 0) {
    screen.value = event.target.value;
  } else {
    screen.value += event.target.value;
  }
});
seven.addEventListener("click", function (event) {
  if (screen.value == 0) {
    screen.value = event.target.value;
  } else {
    screen.value += event.target.value;
  }
});
eight.addEventListener("click", function (event) {
  if (screen.value == 0) {
    screen.value = event.target.value;
  } else {
    screen.value += event.target.value;
  }
});
nine.addEventListener("click", function (event) {
  if (screen.value == 0) {
    screen.value = event.target.value;
  } else {
    screen.value += event.target.value;
  }
});
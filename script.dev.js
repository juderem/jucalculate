"use strict";

// <!--
//        ... User starts off typing numbers (e.g. 12 )
//         1. Have 0-9 buttons and they need values (HTML buttons)
//         3. onclick 0-9 buttons - trigger an event - addEventListener
//         3. Get the value from the button (event.target.value)
//         4. Value of the button goes into input box - document.getElementById .. set innerHTML - ... 
//         6. IF the input already has a value -> append it to the end of the current value
//         7. Store the value in a variable
//         ... Have functions/operators (+ - * /) as buttons and they need values
//         1. Onclick of the button
//         2. add the "+" to the input box
//         3. Keep a note of the operator which was clicked
//         4. OPTION #1 - change the function which is run when the = is clicked 
//                        (e.g. We click "+" this means the "=" needs to run a doAddition(param1,param2))
//         ... HOPE the user puts in another number (e.g. 3)
//         1. Onclick of the button
//         2. add the number to the input box
//         3. IF the input already has a value -> append it to the end of the current value
//         ... equals button
//         1. Function for the equal button is clicked
//         2. Calculate the result
//         3. Get the first parameter , get the operator, get the second parameter
//         4. OPTION #2 - Use a switchcase on the operator to decide how to calculate the result
//         5. Show this result to the user
//         6. Return/Show it on the screen -> .innerHTML = <theresult>;
//     --></theresult>
document.getElementById('reset').addEventListener("click", function (event) {
  document.getElementById('screen').value = 0;
});
var num1;
var num2;
var activeOperator;
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
  screen.value = result; // if (activeOperator == "+") {
  //     return screen.value = num1 + num2;
  // } else if (activeOperator == "-") {
  //     return screen.value = num1 - num2;
  // } else if (activeOperator == "×") {
  //     return screen.value = num1 * num2;
  // } else if (activeOperator == "/") {
  //     return screen.vaule = num1 / num2;
  // } else {
  //     return "ERR";
  // }
}); // for (let i = 0; i <= inputs[id].length; i++)

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
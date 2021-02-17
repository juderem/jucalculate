document.getElementById('reset').addEventListener("click", (event) => {
    document.getElementById('screen').value = 0;
})

let num1
let num2
let activeOperator
let decimel

document.getElementById('plus').addEventListener("click", (event) => {
    num1 = screen.value;
    activeOperator = '+';
    screen.value = screen.value + activeOperator;
})

document.getElementById('minus').addEventListener("click", (event) => {
    num1 = screen.value;
    activeOperator = "-";
    screen.value = screen.value + activeOperator;
})

document.getElementById('mult').addEventListener("click", (event) => {
    num1 = screen.value;
    activeOperator = "*";
    screen.value = screen.value + activeOperator;
})

document.getElementById('divide').addEventListener("click", (event) => {
    num1 = screen.value;
    activeOperator = "/";
    screen.value = screen.value + activeOperator;
})

document.getElementById('equals').addEventListener("click", (event) => {
    console.log(screen.value);
    let result = eval(screen.value);
    console.log(result);
    screen.value = result;
})

document.getElementById('dot').addEventListener("click", (event) => {
    num1 = screen.value;
    decimal = ".";
    screen.value = num1 + decimal;
})

const screen = document.getElementById('screen');
const seven = document.getElementById('seven');
const four = document.getElementById('four');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const five = document.getElementById('five');
const six = document.getElementById('six');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');

zero.addEventListener("click", (event) => {
    if (screen.value == 0) {
        screen.value = event.target.value;
    } else {
        screen.value += event.target.value;
    }
})

one.addEventListener("click", (event) => {
    if (screen.value == 0) {
        screen.value = event.target.value;
    } else {
        screen.value += event.target.value;
    }
})

two.addEventListener("click", (event) => {
    if (screen.value == 0) {
        screen.value = event.target.value;
    } else {
        screen.value += event.target.value;
    }
})

three.addEventListener("click", (event) => {
    if (screen.value == 0) {
        screen.value = event.target.value;
    } else {
        screen.value += event.target.value;
    }
})

four.addEventListener("click", (event) => {
    if (screen.value == 0) {
        screen.value = event.target.value;
    } else {
        screen.value += event.target.value;
    }
})

five.addEventListener("click", (event) => {
    if (screen.value == 0) {
        screen.value = event.target.value;
    } else {
        screen.value += event.target.value;
    }
})

six.addEventListener("click", (event) => {
    if (screen.value == 0) {
        screen.value = event.target.value;
    } else {
        screen.value += event.target.value;
    }
})

seven.addEventListener("click", (event) => {
    if (screen.value == 0) {
        screen.value = event.target.value;
    } else {
        screen.value += event.target.value;
    }
})

eight.addEventListener("click", (event) => {
    if (screen.value == 0) {
        screen.value = event.target.value;
    } else {
        screen.value += event.target.value;
    }
})

nine.addEventListener("click", (event) => {
    if (screen.value == 0) {
        screen.value = event.target.value;
    } else {
        screen.value += event.target.value;
    }
})
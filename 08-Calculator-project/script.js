// Display/Input
const display = document.getElementById('calc-input');

// Number buttons
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

// Operation buttons
const addition = document.getElementById('addition');
const subtraction = document.getElementById('subtraction');
const multiplication = document.getElementById('multiplication');
const division = document.getElementById('division');
const equals = document.getElementById('equals');

// Utility buttons
const reset = document.getElementById('reset');
const backspace = document.getElementById('backspace');
const percentage = document.getElementById('percentage');
const period = document.getElementById('period');
const plusminus = document.getElementById('plusminus');

//all buttons
const buttons = document.querySelectorAll('button');

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function percentof(a, b) {
    return (a / b) * 100;
}

const buttonActions = {
    'zero': () => display.value += "0",
    'one': () => display.value += "1",
    'two': () => display.value += "2",
    'three': () => display.value += "3",
    'four': () => display.value += "4",
    'five': () => display.value += "5",
    'six': () => display.value += "6",
    'seven': () => display.value += "7",
    'eight': () => display.value += "8",
    'nine': () => display.value += "9",
    'addition': () => display.value += " + ",
    'subtraction': () => display.value += " - ",
    'multiplication': () => display.value += " * ",
    'division': () => display.value += " / ",
    'equals': () => display.value = eval(display.value),
    'reset': () => display.value = "",
    'backspace': () => display.value = display.value.slice(0, -1),
    'percentage': () => display.value = eval(display.value) / 100,
    'period': () => display.value += ".",
    'plusminus': () => display.value = eval(display.value) * -1
};

for (const button of buttons) {
    button.addEventListener('click', (e) => {
        const action = buttonActions[e.target.id];
        if (action) action();
    })
}
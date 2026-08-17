const display = document.querySelector("#calc-input");
const buttons = document.querySelectorAll("button");

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const percentof = (a) => a / 100;


const operations = {
    '+': add,
    '-': subtract,
    '×': multiply,
    '÷': divide,
};


const keyMap = {
    "0": "0",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "+": "+",
    "-": "-",
    "*": "×",
    "/": "÷",
    ".": "period",
    "%": "percentage",
    "Backspace": "backspace",
    "Delete": "backspace",
    "Escape": "reset",
    "=": "equals",
    "Enter": "equals",
    "n": "plusminus",
};

document.addEventListener("keydown", (event) => {
    const key = event.key;

    // ignore repeated keydown from holding a key
    if (event.repeat) return;

    const buttonId = keyMap[key];
    if (!buttonId) return;

    const targetButton =
        document.getElementById(buttonId) ||
        Array.from(document.querySelectorAll("button")).find(
            (button) => button.textContent.trim() === key
        );

    if (!targetButton) return;

    event.preventDefault();
    targetButton.click();
});


let first = '';
let operator = null;
let second = '';
let waitingForSecond = false;

function updateDisplay() {
    if (first === '') {
        display.value = '0';
    }
    else if (operator === null) {
        display.value = `${first}`;
    }
    else if (waitingForSecond) {
        display.value = `${first} ${operator}`;
    }
    else {
        display.value = `${first} ${operator} ${second}`;
    }
}

updateDisplay();

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.id === "reset") {
            first = '';
            operator = null;
            second = '';
            waitingForSecond = false;
            updateDisplay();
        }
        else if (e.target.textContent >= '0' && e.target.textContent <= '9') {
            if (operator === null && !waitingForSecond) {
                first += e.target.textContent;
                updateDisplay();
            }
            else if (waitingForSecond) {
                second += e.target.textContent;
                waitingForSecond = false;
                updateDisplay();
            }
            else {
                second += e.target.textContent;
                updateDisplay();
            }
        }
        else if (['+', '-', '×', '÷'].includes(e.target.textContent)) {
            if (waitingForSecond && e.target.textContent === '-') {
                second = '-';
                waitingForSecond = false;
                updateDisplay();
            }
            else if (first === '' && ['-'].includes(e.target.textContent)) {
                first += e.target.textContent;
                updateDisplay();
            }
            else if (first === '-' && ['+'].includes(e.target.textContent)) {
                first = '';
                updateDisplay();
            }
            else if (first !== '' && !['-'].includes(first) && second === '' && operator === null) {
                operator = e.target.textContent;
                waitingForSecond = true;
                updateDisplay();
            }
            else if (first !== '' && !['-'].includes(first) && second !== '') {
                first = `${operations[operator](Number(first), Number(second))}`;
                second = '';
                operator = e.target.textContent;
                waitingForSecond = true;
                updateDisplay();
            }
        }
        else if (e.target.id === "backspace") {
            if (second !== '') { second = second.slice(0, -1) }
            else if (waitingForSecond) {
                operator = null;
                waitingForSecond = false;
            }
            else if (operator === null && first !== '') {
                first = first.slice(0, -1);
            }
            updateDisplay();
        }
        else if (e.target.id === "plusminus") {
            if (second === '-') {
                second = '';
                waitingForSecond = true;
            }
            else if (second !== '') {
                second = String(-Number(second));
            }
            else if (waitingForSecond) {
                second = '-';
                waitingForSecond = false;
                updateDisplay();
            }
            else if (operator === null && first !== '') {
                first = String(-Number(first));
            }
            updateDisplay();
        }
        else if (e.target.id === "equals") {
            if (first !== '' && operator !== null && second !== '') {
                if (operator === '÷' && Number(second) === 0) {
                    display.value = 'Error : Div by zero';
                    setTimeout(() => {
                        first = '';
                        operator = null;
                        second = '';
                        waitingForSecond = false;
                        updateDisplay();
                    }, 2000);
                    return;
                }
                first = `${operations[operator](Number(first), Number(second))}`;
                second = '';
                operator = null;
                waitingForSecond = false;
                updateDisplay();
            }
        }
        else if (e.target.id === "period") {
            if (second === '-') {
                second = '-0.';
            }
            else if (second !== '' && !second.includes('.')) { second += '.' }
            else if (waitingForSecond) {
                second = '0.';
            }
            else if (operator === null && first === '-') {
                first = '-0.';
            }
            else if (operator === null && first !== '' && !first.includes('.')) {
                first += '.'
            }
            else if (first === '') {
                first = '0.'
            }
            updateDisplay();
        }

        else if (e.target.id === "percentage") {
            if (second !== '') { second = String(Number(second) / 100) }
            else if (operator === null && first !== '') {
                first = String(Number(first) / 100)
            }
            updateDisplay();
        }
    })
})




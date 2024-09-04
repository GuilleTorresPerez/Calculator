let firstOperand = 0;
let secondOperand = 0;
let operator = 0;

class operationStateMachine {
    constructor() {
        this.state = 'writing first number';
    }

    digitPressed(digit) {
        console.log("actual state: " + this.state);

        if(this.state == 'writing first number') {
            firstOperand = (firstOperand * 10) + digit;
            display.innerHTML += digit;

            console.log("the first number now is: " + firstOperand);
        }

        if(this.state == 'writing second number') {
            secondOperand = (secondOperand * 10) + digit;
            display.innerHTML += digit;

            console.log("the second number now is: " + secondOperand);            
        }
    }
}

const add = (num1, num2) => num1 + num2;
const substract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

function operate(num1, num2, operator) {
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return substract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

const display = document.querySelector('.display');
const calculatorSM = new operationStateMachine();

function digitPressed(digit) {
    calculatorSM.digitPressed(digit);
}


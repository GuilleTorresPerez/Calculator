let firstOperand = 0;
let secondOperand = 0;
let operator = '';
let result = 0;
const display = document.querySelector('.display');
const calculatorSM = new operationStateMachine();

class operationStateMachine {
    constructor() {
        this.state = 'init state';
    }

    digitPressed(digit) {
        switch (this.state) {
            case 'init state':
                display.innerHTML = '';
                clearOperation();
            case 'writing first number':
                firstOperand = (firstOperand * 10) + digit;
                display.innerHTML += digit;
                this.state = 'writing first number';  
                console.log("The first number now is: " + firstOperand);
                break;
            case 'writing second number':
                secondOperand = (secondOperand * 10) + digit;
                display.innerHTML += digit;
                this.state = 'writing second number';
                console.log("The second number now is: " + secondOperand);
                break;
        }
    }

    operatorPressed(char) {
        console.log("Operator pressed");

        switch (this.state) {
            case 'init state':
                firstOperand = result;
                secondOperand = 0;
                result = 0;
                operator = char;
                this.state = 'writing second number';
                display.innerHTML += ' ' + char + ' ';
                break;
            case 'writing second number':
                // Do nothing
                break;

            case 'writing first number':
                operator = char;
                this.state = 'writing second number';
                display.innerHTML += ' ' + char + ' ';
                break;
        }
    }

    equalPressed() {
        switch (this.state) {
            case 'init state':
            case 'writing first number':
                // Do nothing
                break;

            case 'writing second number':
                console.log("The first number now is: " + firstOperand);
                console.log("The operator now is: " + operator);
                console.log("The second number now is: " + secondOperand);

                result = operate(firstOperand, secondOperand, operator);
                display.innerHTML = result;
                this.state = 'init state';
                break;
        }
    }

    clearPressed() {
        switch (this.state) {
            case 'init state':
            case 'writing first number':
            case 'writing second number':
                display.innerHTML = '';
                this.state = 'init state';
                clearOperation();
                break;
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

const clearOperation = () => {
    firstOperand = 0; 
    secondOperand = 0; 
    operator = ''; 
    result = 0;
};

const digitPressed = (digit) => calculatorSM.digitPressed(digit);
const operatorPressed = (char) => calculatorSM.operatorPressed(char); 
const equalPressed = () => calculatorSM.equalPressed();
const clearPressed = () => calculatorSM.clearPressed();


function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1-num2;
}

function multiply(num1, num2) {
    return num1*num2;
}

function divide(num1, num2) {
   return num1/num2;
}

let number1;
let number2;
let operatorButton;


function operate(operater, num1) {
    number2 = parseInt(document.getElementById('screen').value);
    let num2 = number2;
    if(operater == "add") {
        result = add(num1, num2);
        console.log(result);
    }
    else if(operater == "subtrack") {
        result = subtract(num1, num2);
        console.log(result);
    }
    else if(operater == "multiply") {
        result = multiply(num1, num2);
        console.log(result);
    }
    else if(operater == "divide") {
        result = divide(num1, num2);
        console.log(result);
    }
}

function addNum(value){
    let input = document.getElementById('screen');
    input.value = input.value + value; 
}

function clearNum(){
    document.getElementById('screen').value = '';
}

function buttonOperator(operation) {
    worker = operation;
    number1 = parseInt(document.getElementById('screen').value);
    console.log(number1);
    console.log(worker);
    clearNum();
}

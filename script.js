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

function operate(operater, num1, num2) {
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
    number1 = input.value;
    
}

function clearNum(num){
    let clear = docuement.getElementById('screen');
    input.value = num;
}

console.log(number1);

const display = document.querySelector('#display');

var firstOperand = '';
var secondOperand = '';
var op = '';
var flag = true;
var result = '';

function clearDisplay() {
  firstOperand = '';
  secondOperand = '';
  op = '';
  result = '';
  flag = true;
  display.innerText = '';
}


function toggle(flag) {
  if (flag) {
    return false;
  } else {
    return true;
  }
}

function numberButton(number) {

  if (flag) {
    if (result != '') {
      clearDisplay();
    }
    firstOperand = firstOperand + number;
  } else {
    secondOperand = secondOperand + number;
  }
  display.innerText = display.innerText + number;
}

function operatorButton(operator) {
  flag = toggle(flag);
  op = operator;
  if (secondOperand != '') {
    equalButton();
  }
  display.innerText = display.innerText + operator;
}

function equalButton() {

  if (firstOperand == '' || secondOperand == '') {
    display.innerText = 'One of the Operand is Empty!!';
    return;
  }

  switch (op) {

    case '+':
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
      display.innerText = result;
      break;

    case '-':
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
      display.innerText = result;
      break;

    case 'x':
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
      display.innerText = result;
      break;

    case '/':
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
      display.innerText = result;
      break;

    case '%':
      result = parseFloat(firstOperand) % parseFloat(secondOperand);
      display.innerText = result;
      break;

    default:
      display.innerText = "Error!!"
      break;
  }

  firstOperand = result;
  secondOperand = '';
  flag = toggle(flag);
}

function changeColor() {
  var backColor = document.querySelectorAll(".calculator button");
  randomBackColor = Math.floor((Math.random() * 1000000) + 1);

  backColor.forEach(item => {
    item.style.backgroundColor = `#${randomBackColor}`;
  });
}


// PS: dont make calculator this way use eval() method...
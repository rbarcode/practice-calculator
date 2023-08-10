

// business logic
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function calculate(number1, number2, paramOperator) {
  if (paramOperator === "addition") {
    return add(number1, number2);
  } else if (paramOperator === "subtraction") {
    return subtract(number1, number2);
  } else if (paramOperator === "multiplication") {
    return multiply(number1, number2);
  } else if (paramOperator === "division") {
    return divide(number1, number2);
  }
}

// user interface logic 

window.addEventListener("load", submit);

function submit() {
  const form = document.getElementById("calculator");
  form.addEventListener("submit", handleCalculation);
}

function handleCalculation(event) {
  event.preventDefault();

  const num1 = parseInt(document.querySelector("input#number1").value);
  const num2 = parseInt(document.querySelector("input#number2").value);
  const operator = document.querySelector("input[name='operator']:checked").value;

  let result = calculate(num1, num2, operator);

  document.getElementById("output").innerText = "your result is " + result + '!';
}
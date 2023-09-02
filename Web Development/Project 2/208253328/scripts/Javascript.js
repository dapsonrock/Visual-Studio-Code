// JavaScript.js

// Function to append a character to the result field
function appendToResult(char) {
  document.getElementById("result").value += char;
}

// Function to clear the result field
function clearResult() {
  document.getElementById("result").value = "";
}

// Function to calculate the result
function calculateResult() {
  try {
    const expression = document.getElementById("result").value;
    const result = eval(expression); // Using the eval function for simplicity
    document.getElementById("result").value = result;
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}
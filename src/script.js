// Check JS connection
console.log("JS script is running!");

// Get DOM elements
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultElement = document.getElementById("result");

// Define variables
let operation = "";
let answerOutput = "";

// Calculate function
function calculate() {
    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);

    if (operation === "add") {
        answerOutput = num1 + num2;
    } else if (operation === "subtract") {
        answerOutput = num1 - num2;
    } else if (operation === "multiply") {
        answerOutput = num1 * num2;
    } else if (operation === "divide") {
        answerOutput = num1 / num2;
    }
    resultElement.textContent = answerOutput;
    console.log("Answer is:", answerOutput);
}

//Operation button event listeners
document.getElementById("addBtn").addEventListener("click", function () {
    operation = "add";
    calculate();
});
document.getElementById("subtractBtn").addEventListener("click", function () {
    operation = "subtract";
    calculate();
});
document.getElementById("multiplyBtn").addEventListener("click", function () {
    operation = "multiply";
    calculate();
});
document.getElementById("divideBtn").addEventListener("click", function () {
    operation = "divide";
    calculate();
});
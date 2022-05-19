function sum(x, y) {
    let num1 = parseInt(x)
    let num2 = parseInt(y)
    let result = num1 + num2
    display.innerText = result
    displayValue = result
}

function subtract(x, y) {
    let num1 = parseInt(x)
    let num2 = parseInt(y)
    let result = num1 - num2
    display.innerText = result
    displayValue = result
}

function multiply(x, y) {
    let num1 = parseInt(x)
    let num2 = parseInt(y)
    let result = num1 * num2
    display.innerText = result
    displayValue = result
}

function divide(x, y) {
    let num1 = parseInt(x)
    let num2 = parseInt(y)
    let result
    y === 0 ? result = 'Error' : result = num1 / num2
    display.innerText = result
    displayValue = result
}

function operate(operation, x, y) {
    if (operation === "sum") {
        return sum(x, y)
    } else if (operation === "subtract") {
        subtract(x, y)
    } else if (operation === "multiply") {
        multiply(x, y)
    } else if (operation === "divide") {
        divide(x, y)
    }
}

const display = document.querySelector(".display")
let displayValue = ""

const MathData = {
    operation: null,
    operands: [],
}

const numberButtons = ([...document.getElementsByClassName("number")])
numberButtons.forEach(button => {
    button.addEventListener("click", e => {
        displayValue = `${displayValue}${e.target.innerText}`
        display.innerText = displayValue
    })
})

const operators = [...document.getElementsByClassName("operator")]
operators.forEach(operator => {
    operator.addEventListener("click", () => {
        if (MathData.operands.length = 2) {
            MathData.operands = []
        }
        if (display.innerText) {
            displayValue = display.innerText
            display.innerText = ""
        }
        MathData.operands.push(displayValue)
        displayValue = ""
        display.innerText = ""
        if (MathData.operands.length > 1) {
            operate(MathData.operation, MathData.operands[0], MathData.operands[1])
        }
        MathData.operation = operator.dataset.operation
    })
})

const clearButton = document.querySelector(".clear-all")

clearButton.addEventListener("click", () => {
    displayValue = ""
    display.innerText = ""
    MathData.operands = []
    MathData.operation = null
})

const equalsButton = document.querySelector("#equals")

equalsButton.addEventListener("click", () => {
    MathData.operands.push(displayValue)
    operate(MathData.operation, MathData.operands[0], MathData.operands[1])
    // MathData.operands = []
    // displayValue = ""
})
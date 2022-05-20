function sum(arr) {
    return arr[0] + arr[1]
}

function subtract(arr) {
    return arr[0] - arr[1]
}

function multiply(arr) {
    return arr[0] * arr[1]
}

function divide(arr) {
    let result = arr[0] / arr[1]
    if (result === Infinity) {
        return "Infinity"
    } else {
        return result
    }
}

function operate(operation, arr) {
    if (operation === "sum") {
        return sum(arr)
    } else if (operation === "subtract") {
        return subtract(arr)
    } else if (operation === "multiply") {
        return multiply(arr)
    } else if (operation === "divide") {
        return divide(arr)
    }
}

let currentOperation =  null
let operands = []

const display = document.querySelector(".display")
// let displayValue = ""

const numberButtons = [...document.getElementsByClassName("number")]
numberButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const {textContent} = e.target
        if (textContent.includes(".") && display.textContent.includes(".")) return
        if (textContent === "." && display.textContent === "") {
            display.textContent += "0"
        }
        display.textContent += textContent
    })
})

const operators = [...document.getElementsByClassName("operator")]
operators.forEach(operator => {
    operator.addEventListener("click", (e) => {
        if (currentOperation) return
        if (!display.textContent) return
        operands.push(display.textContent)
        currentOperation = e.target.dataset.operation
        display.textContent = ""
    })
})

const clearButton = document.querySelector(".clear-all")
clearButton.addEventListener("click", () => {
    displayValue = ""
    display.textContent = displayValue
    currentOperation = ""
    operands = []
})

const deleteButton = document.querySelector(".backspace")
deleteButton.addEventListener("click", () => {
    let length = display.textContent.length
    display.textContent = display.textContent.slice(0, length - 1)
})

const equalsButton = document.querySelector(".equals")
equalsButton.addEventListener("click", () => {
    operands.push(display.textContent)
    operands = operands.map(item => parseInt(item))
    let result = operate(currentOperation, operands)
    if (isFinite(result)) {
        display.textContent = Math.round(result * 1000) / 1000
    } else if (result === "Infinity") {
        display.textContent = "You can't divide by 0!"
    } else {
        display.textContent = "Please try again..."
    }
    operands = []
    currentOperation = null
})
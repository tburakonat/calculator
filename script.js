function sum(x, y) {
 
}

function subtract(x, y) {

}

function multiply(x, y) {

}

function divide(x, y) {

}

function operate(operation, x, y) {

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

    })
})

const operators = [...document.getElementsByClassName("operator")]
operators.forEach(operator => {
    operator.addEventListener("click", () => {

    })
})

const clearButton = document.querySelector(".clear-all")

clearButton.addEventListener("click", () => {
    
})

const deleteButton = document.querySelector(".backspace")

deleteButton.addEventListener("click", () => {
    
})

const equalsButton = document.querySelector("#equals")

equalsButton.addEventListener("click", () => {
    
})
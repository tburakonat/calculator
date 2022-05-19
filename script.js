function add(x, y) {
    return x + y
}

function subtract(x, y) {
    return x - y
}

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    return y === 0 ? 'Error' : x / y
}

function operate(operator, x, y) {
    return operator(x, y)
}

const display = document.querySelector(".display")
let displayValue = ""

const numberButtons = ([...document.getElementsByClassName("number")])
numberButtons.forEach(button => {
    button.addEventListener("click", e => {
        displayValue = `${displayValue}${e.target.innerText}`
        display.innerText = displayValue
    })
})
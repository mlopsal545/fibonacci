input.onButtonPressed(Button.A, function () {
    suma = numA + numB
    numA = numB
    numB = suma
    basic.showNumber(suma)
    basic.pause(1000)
    basic.clearScreen()
})
let suma = 0
let numB = 0
let numA = 0
basic.showNumber(numA)
basic.pause(1000)
numB = 1
basic.showNumber(numB)
basic.pause(1000)
basic.clearScreen()

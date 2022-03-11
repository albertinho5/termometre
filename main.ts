input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showString("Celsius")
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        if (input.temperature() < 25) {
            basic.showString("<25")
        } else if (input.temperature() > 25) {
            basic.showString(">25")
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        if (input.temperature() > 25) {
            basic.showLeds(`
                # . # . #
                . # # # .
                # # # # #
                . # # # .
                # . # . #
                `)
        } else if (input.temperature() < 25) {
            basic.showLeds(`
                . # # # .
                # . # . #
                . . # . .
                # . # . .
                . # # . .
                `)
        }
    }
})

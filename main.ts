radio.onReceivedNumber(function (receivedNumber) {
    while (enviado == 0) {
        basic.pause(100)
    }
    basic.clearScreen()
    if (receivedNumber == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    }
    if (receivedNumber == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (receivedNumber == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
})
function ganador (núm: number) {
    if (enviado == 1 && núm == 3) {
        basic.showIcon(IconNames.Happy)
    }
    if (enviado == 1 && núm == 1) {
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
    if (enviado == 1 && núm == 2) {
        basic.showIcon(IconNames.Sad)
    }
    if (enviado == 2 && núm == 1) {
        basic.showIcon(IconNames.Heart)
    }
    if (enviado == 2 && núm == 2) {
        basic.showIcon(IconNames.Heart)
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
    if (enviado == 2 && núm == 3) {
        basic.showIcon(IconNames.Sad)
    }
    if (enviado == 3 && núm == 1) {
        basic.showIcon(IconNames.Sad)
    }
    if (enviado == 3 && núm == 2) {
        basic.showIcon(IconNames.Happy)
    }
    if (enviado == 3 && núm == 3) {
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
}
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        # # . # #
        # # . # #
        `)
    radio.sendNumber(3)
    enviado = 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    radio.sendNumber(2)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    radio.sendNumber(1)
    enviado = 1
})
let enviado = 0
radio.setGroup(10)
enviado = 0
let crack = 0
basic.forever(function () {
	
})

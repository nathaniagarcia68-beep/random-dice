function SetDicePattern () {
    list = [
    images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . . . # .
        . . . . .
        . # . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . . . # .
        . . # . .
        . # . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . # . # .
        . # . # .
        . # . # .
        . . . . .
        `)
    ]
}
input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(0, 10))
    basic.pause(1000)
    basic.clearScreen()
})
function RollDice () {
    list[randint(0, 5)].showImage(0)
}
input.onGesture(Gesture.Shake, function () {
    RollDice()
})
let list: Image[] = []
SetDicePattern()
basic.forever(function () {
	
})

/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Gavin Gallant
 * Created on: Oct 20224
 * This program counts down
*/


let neopixelStrip: neopixel.Strip = null
let neopixelNumber = 3
let count = 4
basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(500)
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()

input.onButtonPressed(Button.A, function () {
    while (count >= 0) {
        basic.pause(500)
        basic.showNumber(count)
        
        // if neopixel variable == 3
        if (neopixelNumber == 3) {
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        }

        // if neopixel variable == 2
        if (neopixelNumber == 2) {
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        }

        // if neopixel variable == 1
        if (neopixelNumber == 1) {
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        }

        //if neopixel variable == 0
        if (neopixelNumber == 0) {
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        }

        // subtract and reset
        neopixelStrip.show()
        basic.pause(1000)
        neopixelNumber--
        count--
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
    }
    basic.showString("GO!!!")
    basic.showIcon(IconNames.Happy)
})
let _ = 0
pins.servoWritePin(AnalogPin.P9, _)
basic.forever(function () {
    music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.UntilDone)
    serial.redirect(
    SerialPin.P8,
    SerialPin.P12,
    BaudRate.BaudRate115200
    )
})
basic.forever(function () {
    _ += 1
})

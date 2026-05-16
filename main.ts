for (let index = 0; index < 4; index++) {
    servos.P1.run(-20)
    servos.P2.run(50)
    basic.pause(1000)
    kitronik_servo_lite.right()
    basic.pause(1000)
}
kitronik_servo_lite.stop()
basic.forever(function () {
	
})

import RPi.GPIO as GPIO

button_pin =27
led_pin =22

GPIO.setmode(GPIO.BCM)

GPIO.setup(button_pin, GPIO.IN)
GPIO.setup(led_pin, GPIO.OUT)

buttonInputPrev = False
ledOn = False

try:
    while True:
        buttonInput = GPIO.input(button_pin)

        if buttonInput and not buttonInputPrev:
            print("rising edge")
            ledOn = True if not ledOn else False
            GPIO.output(led_pin, ledOn)

        elif not buttonInput and buttonInput and buttonInputPrev:
            print("falling edge") 
        else: pass

        buttonInputPrev = buttonInput

except KeyboardInterrupt:
    pass

    GPIO.cleanup()     
import RPi.GPIO as GPIO

button_pin =27
led_pin =22

GPIO.setmode(GPIO.BCM)

GPIO.setup(button_pin, GPIO.IN)
GPIO.setup(led_pin, GPIO.OUT)

try:
    while True:
        buttonInput = GPIO.input(button_pin)
        GPIO.output(led_pin, buttonInput)

except KeyboardInterrupt:
    pass

GPIO.cleanup()
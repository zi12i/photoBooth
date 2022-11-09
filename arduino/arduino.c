/****************************************
Example Sound Level Sketch for the 
Adafruit Microphone Amplifier
****************************************/

const int sampleWindow = 500; // Sample window width in mS (50 mS = 20Hz)
unsigned int sample;
int distance = 0; 

void setup() 
{
   Serial.begin(9600);
}


void loop() 
{
   int volt = map(analogRead(A0), 0, 1023, 0, 5000); 
   distance = (27.61 / (volt - 0.1696)) * 1000;
     Serial.print(distance);  //거리값을 시리얼모니터로 출력해줍니다.

  Serial.println(" cm");
  // Serial.println(" ");
  delay(500);
   unsigned long startMillis= millis();  // Start of sample window
   unsigned int peakToPeak = 0;   // peak-to-peak level

   unsigned int signalMax = 0;
   unsigned int signalMin = 1024;

   // collect data for 50 mS
   while (millis() - startMillis < sampleWindow)
   {
      sample = analogRead(0);
      if (sample < 1024)  // toss out spurious readings
      {
         if (sample > signalMax)
         {
            signalMax = sample;  // save just the max levels
         }
         else if (sample < signalMin)
         {
            signalMin = sample;  // save just the min levels
         }
      }
   }
   peakToPeak = signalMax - signalMin;  // max - min = peak-peak amplitude
   double volts = (peakToPeak * 5.0) / 1024;  // convert to volts

   Serial.println(volts*1000);
}
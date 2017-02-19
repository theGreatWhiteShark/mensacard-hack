// Number of the LED's pin
const int led = 13;

// Run once on initialization
void setup(){
  // Setup the serial communication
  Serial.begin( 9600 );
  // Use LED as output
  pinMode( led, OUTPUT );
}

// Run until reseting or switching of the power supply
void loop(){
  // Turn on the LED
  digitalWrite( led, HIGH );
  // Wait a second
  delay( 1000 );
  // Turn the LED off again
  digitalWrite( led, LOW );
  // Wait another second
  delay( 1000 );
  // Print a message via the serial port
  Serial.println( "Hello world!" );
}
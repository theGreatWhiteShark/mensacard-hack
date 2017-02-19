const int led = 13;

void setup() {
  pinMode( led, OUTPUT );
}

void loop() {
  digitalWrite( led, HIGH ); // switch on LED
  delay( 1000 );
  digitalWrite( led, LOW ); // switch off LED
  delay( 1000 );
  digitalWrite( led, HIGH ); // switch on LED
  delay( 200 );
  digitalWrite( led, LOW ); // switch off LED
  delay( 200 );
  digitalWrite( led, HIGH ); // switch on LED
  delay( 200 );
  digitalWrite( led, LOW ); // switch off LED
  delay( 200 );
}

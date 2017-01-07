const int led = 13;

void setup() {
  Serial.begin( 9600 );
  pinMode( led, OUTPUT );
}

void loop(){
  if ( Serial.available() ){
    char input = Serial.read();
    if ( input == 'H' || input == 'h' ){
      digitalWrite( led, HIGH );
      Serial.println( input );
    } else if ( input == 'L' || input == 'l' ){
      digitalWrite( led, LOW );
      Serial.println( input );
    }
  }
}
     

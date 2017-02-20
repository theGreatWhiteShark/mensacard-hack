// Use the Serial-Peripheral Interfaces to communicate with the Arduino
#if 0
  #include <SPI.h>
  #include <PN532_SPI.h>
  #include <PN532.h>
  #include <NfcAdapter.h>

  PN532_SPI pn532spi( SPI, 10 );
  NfcAdapter nfc = NfcAdapter( pn532spi );
#elif 0 // If SPI is not working, set this one to 1 to use HSU
  #include <PN532_HSU.h>
  #include <PN532.h>
  #include <NfcAdapter.h>
      
  PN532_HSU pn532hsu( Serial1 );
  NfcAdapter nfc = NfcAdapter( pn532hsu );
#else // This one I used with my NFC shield
  #include <PN532_I2C.h>
  #include <PN532.h>
  #include <NfcAdapter.h>
  #include <Wire.h>

  PN532_I2C pn532i2c( Wire );
  NfcAdapter nfc = NfcAdapter( pn532i2c );
#endif

// Run once on initialization
void setup() {
  Serial.begin( 9600 );
  Serial.println("Starting up NDEF reader...");
  nfc.begin();
}

// Run until resetting or switching of the power supply
void loop(){
  if ( nfc.tagPresent() ){
    // A tag was detected
    NfcTag tag = nfc.read();
    Serial.println( "Found a tag!" );
    // Print the type of the tag
    Serial.println( tag.getTagType() );
    // And its Unifersal identifier (its name)
    Serial.print( "UID: " );
    Serial.println( tag.getUidString() );
  }
}
    
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
  // Application Constructor
  initialize: function() {
    this.bindEvents();
    console.log( "Starting the NFC-reader..." );
  },
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady,
			      false);
  },
  onDeviceReady: function() {
    nfc.addTagDiscoveredListener(
      app.onNfc,  // recognize tags
      function( status ){   // listener was successfully initialized
	app.display( "Waiting for a card or tag..." );
      },
      function( error ){  // initializing failed
	app.display( "NFC initialization failed: " + JSON.stringify( error ));
      }
    );
  },
  // Contains NFC event of tag
  onNfc: function( nfcEvent ){
    // Removes the content of messageDiv and clears the screen.
    app.clear();
    // Instead of showing all the details and content, just do
    // a dumb of everything
    app.display( "Event: " + JSON.stringify( nfcEvent ) ); 
    // Display the actual content of the payload
    // app.showTagContent( nfcEvent.tag );
    // Display detailed information about the tag.
    // app.showTagDetails( nfcEvent.tag );
  },

  /////
  // The following three functions are inspired by the 'Beginning NFC'
  // book. Since my phone is just able to access to features: id and
  // techtype, I do not use them. But since they might be handy for
  // someone else, I won't remove them.
  /////
  
  // Prints all the information of the tag provided by the NFC reader.
  showTagDetails: function( tag ){
    console.log( "Disaplying details" );
    app.display( "Details: " );
    app.display( "" );
    app.display( "ID (Hex): " + nfc.bytesToHexString( tag.id ) );
    app.display( "ID (Bytes): " + tag.id );
    app.display( "Type: " + tag.type );
    app.display( "Max. size: " + tag.maxSize + " Byte" );
    app.display( "Writeable: " + tag.isWriteable );
    app.display( "Readonly mode available: " + tag.canMakeReadOnly );
  },

  // Prints the payload of the tag
  showTagContent: function( tag ){
    var message = tag.ndefMessage;
    if ( message !== null ){
      app.display( "Content:");
      app.showContent( message );
    } else {
      app.display( "No content found on tag" );
    }
  },

  showContent: function( record ){
    console.log( "Displaying content" ); 
    // Display the header of the NDEF message
    app.display( "" );
    app.display( "TNF: " + record.tnf );
    app.display( "Type (Hex): " + nfc.bytesToString( record.type ) );
    app.display( "Type (Bytes): " + record.type );
    app.display( "ID (Hex): " + nfc.bytesToString( record.id ) );
    app.display( "ID (Bytes): " + record.id );
  },      

  // Make a line break and print a string on the device's screen
  display: function( message ){
    var label = document.createTextNode( message ),
	lineBreak = document.createElement( "br" );
    messageDiv.appendChild( lineBreak );
    messageDiv.appendChild( label );
  },

  // Clear all the displayed content
  clear: function(){
    console.log( "Clearing screen" );
    messageDiv.innerHTML = "";
  },
};

app.initialize();

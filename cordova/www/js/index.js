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
  // contains NFC event of tag
  onNfc: function( nfcEvent ){
    var tag = nfcEvent.tag;
    // hand tag ID and message to messageDiv
    console.log( "This is my tag: " + tag.id );
    app.display( "Reading tag: " + nfc.bytesToHexString( tag.id ) );
  },
  display: function( message ){
    var label = document.createTextNode( message ),
	lineBreak = document.createElement( "br" );
    messageDiv.appendChild( lineBreak );
    messageDiv.appendChild( label );
  },
};

app.initialize();

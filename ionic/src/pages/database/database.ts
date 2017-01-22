import { Component } from '@angular/core';
// import { Storage } from '@ionic/storage';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-databse',
  templateUrl: 'database.html'
})
export class DatabasePage {

  constructor(public navCtrl: NavController
	      //storage: Storage
  ) {

  }
  // porperty to bind to
  cards = MockCards;

  // just for fun
  selectedCard: Mensacard;
  onSelect( card: Mensacard ): void { this.selectedCard = card; }
  
    
}
// Defining the Mensacard object. At some point this will
// be replaced by the read NFC content
export class Mensacard {
  name: string;
  id: number;
}

// creating a bunch of placeholder cards to fill the
// database for testing
const MockCards: Mensacard[] = [
  { name: 'Lonnie', id: 2231 },
  { name: 'John Doo', id: 932 },
  { name: 'Charles', id: 3 },
  { name: 'Ines', id: 36923 },
  { name: 'Caja', id: 1 } ];

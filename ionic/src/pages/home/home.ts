import { Component } from '@angular/core';
import {
  NavController,
  AlertController // For notifications if the input wasn't correct
} from 'ionic-angular';
// import { Storage } from '@ionic/storage';
import {
  FormGroup, 
  FormControl, // check the form
  FormsModule, // allow two-way data binding 
  Validators // validate the input
} from '@angular/forms';

// The class holding the content of the Mensa card
import { Mensacard } from '../database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  form;
  
  constructor(public navCtrl: NavController,
	      public alertCtrl: AlertController
	      // storage: Storage
  ) {
    this.form = new FormGroup({
      name: new FormControl( "", Validators.required ),
      id: new FormControl( "", Validators.required )
    });
  }

  processForm(){
    let alert = this.alertCtrl.create({
      title: "Mensacard inserted",
      message: "You inserted the Mensacard of: " + this.form.value.name + " with the ID: " + this.form.value.id,
      buttons: [{
	text: 'Ok',
      }]
    });

    if ( this.form.status === 'VALID' ){
      alert.present()
    }

    // store the data
    
  }
}



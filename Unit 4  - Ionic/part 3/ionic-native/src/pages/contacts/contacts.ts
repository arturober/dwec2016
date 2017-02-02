import { Contacts, Contact } from 'ionic-native';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
})
export class ContactsPage {
  contact: Contact = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  pick() {
    Contacts.pickContact()
      .then(c => {
        this.contact = c;
        console.log(c);
      });
  }
}

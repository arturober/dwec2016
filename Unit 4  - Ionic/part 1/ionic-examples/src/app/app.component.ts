import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { ButtonsPage, ListsPage, InputsPage, CardsPage, ToastsPage, AlertsPage, BadgesPage, CheckboxTogglePage, RadioPage } from '../pages/pages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ListsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Lists', component: ListsPage },
      { title: 'Buttons', component: ButtonsPage },
      { title: 'Inputs', component: InputsPage },
      { title: 'Cards', component: CardsPage },
      { title: 'Checkbox and Toggle', component: CheckboxTogglePage },
      { title: 'Radio', component: RadioPage },
      { title: 'Badges and Chips', component: BadgesPage },
      { title: 'Alerts', component: AlertsPage },
      { title: 'Toasts', component: ToastsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    
    this.nav.setRoot(page.component);
  }
}

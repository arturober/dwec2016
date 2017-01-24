import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { ButtonsPage, ListsPage, InputsPage, CardsPage, ToastsPage, AlertsPage, BadgesPage, 
         CheckboxTogglePage, RadioPage, ActionSheetsPage, GesturesPage, FabsPage, GridPage,
         LoadingPage, RangesPage, PopoversPage, InfiniteScrollPage, RefresherPage, ScrollPage,
         SearchbarPage, SegmentPage, SelectPage, SlidesPage, ToolbarPage, VirtualScrollPage } from '../pages/pages';

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
      { title: 'Action Sheets', component: ActionSheetsPage },
      { title: 'Alerts', component: AlertsPage },
      { title: 'Badges and Chips', component: BadgesPage },
      { title: 'Buttons', component: ButtonsPage },
      { title: 'Cards', component: CardsPage },
      { title: 'Checkbox and Toggle', component: CheckboxTogglePage },
      { title: 'Fabs', component: FabsPage },
      { title: 'Gestures', component: GesturesPage },
      { title: 'Grid', component: GridPage },
      { title: 'Infinite scroll', component: InfiniteScrollPage },
      { title: 'Inputs', component: InputsPage },
      { title: 'Lists', component: ListsPage },
      { title: 'Loading', component: LoadingPage },
      { title: 'Popovers', component: PopoversPage },
      { title: 'Ranges', component: RangesPage },
      { title: 'Radio', component: RadioPage },
      { title: 'Refresher', component: RefresherPage },
      { title: 'Scroll', component: ScrollPage },
      { title: 'Search bar', component: SearchbarPage },
      { title: 'Segments', component: SegmentPage },
      { title: 'Selects', component: SelectPage },
      { title: 'Slides', component: SlidesPage },
      { title: 'Toasts', component: ToastsPage },
      { title: 'Toolbar', component: ToolbarPage },
      { title: 'Virtual scroll', component: VirtualScrollPage },
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

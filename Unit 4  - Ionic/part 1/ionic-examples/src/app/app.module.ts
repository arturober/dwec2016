import { ButtonsPage, ListsPage, InputsPage, CardsPage, ToastsPage, AlertsPage, BadgesPage, CheckboxTogglePage, RadioPage } from '../pages/pages';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    ListsPage,
    ButtonsPage,
    InputsPage,
    CardsPage,
    ToastsPage, 
    AlertsPage, 
    BadgesPage, 
    CheckboxTogglePage, 
    RadioPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListsPage,
    ButtonsPage,
    InputsPage,
    CardsPage,
    ToastsPage, 
    AlertsPage, 
    BadgesPage, 
    CheckboxTogglePage, 
    RadioPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }

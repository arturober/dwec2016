import { PopoverComponent } from '../pages/popovers/popover-component';
import {
  ButtonsPage, ListsPage, InputsPage, CardsPage, ToastsPage, AlertsPage, BadgesPage,
  CheckboxTogglePage, RadioPage, ActionSheetsPage, FabsPage, GesturesPage, GridPage,
  LoadingPage, RangesPage, PopoversPage, InfiniteScrollPage, RefresherPage, ScrollPage,
  SearchbarPage, SegmentPage, SelectPage, SlidesPage, ToolbarPage, VirtualScrollPage
} from '../pages/pages';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp, ListsPage, ButtonsPage, InputsPage, CardsPage, ToastsPage, AlertsPage,
    BadgesPage, CheckboxTogglePage, RadioPage, ActionSheetsPage, FabsPage, GesturesPage,
    GridPage, LoadingPage, RangesPage, PopoversPage, InfiniteScrollPage, PopoverComponent, RefresherPage, ScrollPage,
    SearchbarPage, SegmentPage, SelectPage, SlidesPage, ToolbarPage, VirtualScrollPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ListsPage, ButtonsPage, InputsPage, CardsPage, ToastsPage, AlertsPage,
    BadgesPage, CheckboxTogglePage, RadioPage, ActionSheetsPage, FabsPage, GesturesPage,
    GridPage, LoadingPage, RangesPage, PopoversPage, InfiniteScrollPage, PopoverComponent, RefresherPage, ScrollPage,
    SearchbarPage, SegmentPage, SelectPage, SlidesPage, ToolbarPage, VirtualScrollPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }

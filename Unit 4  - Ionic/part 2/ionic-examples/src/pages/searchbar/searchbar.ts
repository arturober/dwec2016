import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Searchbar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-searchbar',
  templateUrl: 'searchbar.html'
})
export class SearchbarPage {
 items: String[] = [
   "Banana",
   "Apple",
   "Pineapple",
   "Orange",
   "Melon",
   "Watermelon",
   "Peach",
   "Strawberry",
   "Gooseberry",
   "Blackberry",
   "Blueberry"
 ];
 filteredItems: String[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.filteredItems = this.items;
  }

  filterItems(event) {
    let search: string = event.target.value;
    if (search && search.trim() != '') {
      search = search.trim().toLowerCase();
      this.filteredItems = this.items.filter(i => i.toLowerCase().includes(search));
    } else {
      this.filteredItems = this.items;
    }
  }

}

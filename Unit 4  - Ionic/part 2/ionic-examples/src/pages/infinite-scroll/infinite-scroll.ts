import { Component } from '@angular/core';
import { InfiniteScroll, NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the InfiniteScroll page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-infinite-scroll',
  templateUrl: 'infinite-scroll.html'
})
export class InfiniteScrollPage {
  items: String[] = [];
  num = 1;
  finished = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.loadMoreItems(null);
  }

  loadMoreItems(infinite: InfiniteScroll) {
    // Simulating an external service call with a timeout
    setTimeout(() => {
      let max = this.num + 15;
      for(;this.num < max; this.num++) {
        this.items.push("Item " + this.num);
      }

      if(this.num >= 60) { // We'll load a maximum of 60 items
        this.finished = true;
      }

      if(infinite != null) {
        infinite.complete(); // Hide the loader
      }
    }, infinite === null?0:2000);
  }
}

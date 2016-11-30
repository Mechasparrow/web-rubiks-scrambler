import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private scramble:string = "";

  constructor(public navCtrl: NavController) {

  }

  scrambleclick(){
    alert("ready to scramble");
  }  

}

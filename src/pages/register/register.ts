import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LoginPage} from '../login/login';
import {HomePage} from '../home/home';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public nav: NavController) {
  }

  // go to login page
  login() {
    this.nav.push(LoginPage);
  }

  // go to home page
  register() {
    this.nav.setRoot(HomePage);
  }
}

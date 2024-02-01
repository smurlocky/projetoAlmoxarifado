import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent {
  constructor (private router: Router) {}

userLogin: any;
login: any;
usersLogin: any;
userPassword: any;

onClick () {
  this.router.navigateByUrl('home')
}

}

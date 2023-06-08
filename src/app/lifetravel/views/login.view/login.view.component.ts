import { Component } from '@angular/core';

@Component({
  selector: 'app-login.view',
  templateUrl: './login.view.component.html',
  styleUrls: ['./login.view.component.css']
})
export class LoginViewComponent {
  sidebarVisible:boolean = false;

  usernamel:string = "";
  passwordl:string = "";
  remember:boolean = false;
  usernamer:string = "";
  passwordr:string = "";
}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Auth } from 'src/app/models/auth.model';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  ngOnInit(): void {
    this.auth = new Auth;
    this.auth.phone='';
    this.auth.password='';

  }

  isAuthorized: Boolean = false;
  router: Router;
  auth: Auth;

  constructor(router: Router) { 
    this.router = router;
  }


  validateInput()  {
    let phoneOk: boolean = this.validatePhone();
    let passOk: boolean = this.validatePassword();

    if (phoneOk && passOk){
      this.isAuthorized = true;
    }
    else {
      this.isAuthorized = false;
    }
  }

  validatePhone() : boolean {
    let validated: boolean = false;
    if (this.auth.phone.length >= 10) {
      validated = true;
    }
    else {
      validated = false;
    }
    return validated;
  }

  validatePassword() : boolean {
    let validated: boolean = false;
    if (this.auth.password.length >= 8){
      validated = true;
    }
    else {
      validated = false;
    }
    return validated;
  }

  enterAccount(){
    this.router.navigateByUrl("/account")
  }


}

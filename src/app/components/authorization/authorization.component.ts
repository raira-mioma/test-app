import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Auth } from 'src/app/models/auth.model';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

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
  
  auth: Auth;

  constructor(private router: Router,private authService: AuthService ) { 
    
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
    this.authService.get().subscribe(x =>   console.log(x));
    this.router.navigateByUrl("/account")
  }


}

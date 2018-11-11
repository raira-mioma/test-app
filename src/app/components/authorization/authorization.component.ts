import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Auth } from 'src/app/models/auth.model';


@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  isAuthorized: Boolean = true;
  router: Router;
  auth: Auth = new Auth;

  constructor(router: Router) { 
    this.router = router;
  }


  ngOnInit() {
  }

  validateInput()  {

  }

  enterAccount(){
    this.router.navigateByUrl("/account")
  }
}

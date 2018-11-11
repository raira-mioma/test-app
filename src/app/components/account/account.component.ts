import { Component, OnInit } from '@angular/core';
import { Account } from '../../models/account.model'
import { Router } from '@angular/router';

import { browserRefresh } from '../../app.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  account: Account;
  
  
  constructor(private router: Router) {
    
}
  ngOnInit() {

    //get account from service here
    this.account = new Account();
    this.account.remainingAmount = 120;
    this.account.paymentAmount = 100;

    if (browserRefresh) {
      this.router.navigateByUrl('/');
    }
  }

  

  makePayment() {

  }

  cancel() {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { Account } from '../../models/account.model'
import { Router } from '@angular/router';

import { browserRefresh } from '../../app.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  account: Account;
    
  constructor(private router: Router, private httpClient: HttpClient) {
    
  }
  ngOnInit() {

    //get account from service here
    //this.httpClient.getAccount(userId).
    this.account = new Account();
    this.account.remainingAmount = 120;
    this.account.paymentAmount = 100;

    if (browserRefresh) {
      this.router.navigateByUrl('/');
    }
  }

  

  makePayment() {
    let paySuccess: boolean = false;
    if (this.account.remainingAmount >= this.account.paymentAmount){
      paySuccess = true;
      this.router.navigate(['/finalization'], { queryParams: { paymentSuccessful : paySuccess} });
    }
  }

  cancel() {
    this.router.navigate(['/finalization'], { queryParams: { paymentSuccessful : false} });
  }

}

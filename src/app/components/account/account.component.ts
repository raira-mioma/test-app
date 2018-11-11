import { Component, OnInit } from '@angular/core';
import { Account } from '../../models/account.model'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  account: Account;
  constructor() { }

  ngOnInit() {
    //get account from service here
    this.account = new Account();
    this.account.remainingAmount = 120;
    this.account.paymentAmount = 100;
  }

  makePayment() {

  }

  cancel() {
    
  }

}

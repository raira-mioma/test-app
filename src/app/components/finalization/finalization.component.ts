import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { browserRefresh } from '../../app.component';

@Component({
  selector: 'app-finalization',
  templateUrl: './finalization.component.html',
  styleUrls: ['./finalization.component.css']
})

export class FinalizationComponent implements OnInit {
  sub: Subscription;
  paySuccess: boolean;
  isLoading: boolean;

  successMessage: string = "Счет успешно оплачен";
  cancelMessage: string = "Счет успешно отменен";

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.isLoading = true;
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      
      this.paySuccess = params['paymentSuccessful'] || false;
      console.log(this.paySuccess);
      
    });
    this.isLoading = false;
    
    if (browserRefresh) {
      this.router.navigateByUrl('/');
    }
   
  }



}

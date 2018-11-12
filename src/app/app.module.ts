import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {NgxMaskModule} from 'ngx-mask';


import { AuthorizationComponent } from './components/authorization/authorization.component';
import { AccountComponent } from './components/account/account.component';
import { FinalizationComponent } from './components/finalization/finalization.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    AccountComponent,
    FinalizationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, 
    FormsModule, 
    ButtonModule, 
    InputTextModule, 
    RouterModule, 
    NgxMaskModule.forRoot(), 
    //HttpClientInMemoryWebApiModule.forRoot(InMemoryDb, { delay: 100 }) : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { AccountComponent } from './components/account/account.component';
import { FinalizationComponent } from './components/finalization/finalization.component';

const routes: Routes = [
  { path: 'auth', component: AuthorizationComponent },
  { path: 'account', component: AccountComponent },
  { path: 'finalization', component: FinalizationComponent },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

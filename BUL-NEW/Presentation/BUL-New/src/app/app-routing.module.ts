import { ViewResultsComponent } from './components/view-results/view-results.component';
import { DomainComponent } from './components/domain/domain.component';
import { AccountComponent } from './components/account/account.component';
import { PasswordComponent } from './components/password/password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasteComponent } from './components/paste/paste.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'password',
    component: PasswordComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'domain',
    component: DomainComponent,
  },
  {
    path: 'paste',
    component: PasteComponent,
  },
  {
    path: 'view-results',
    component: ViewResultsComponent,
  },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

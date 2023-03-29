import { ViewResultsComponent } from './components/view-results/view-results.component';
import { BreachComponent } from './components/breach/breach.component';
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
    path: 'breach',
    component: BreachComponent,
  },
  {
    path: 'password',
    component: PasswordComponent,
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

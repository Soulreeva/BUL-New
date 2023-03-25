import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from '../modules/material.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PasswordComponent } from './components/password/password.component';
import { AccountComponent } from './components/account/account.component';
import { DomainComponent } from './components/domain/domain.component';
import { PasteComponent } from './components/paste/paste.component';
import { ViewResultsComponent } from './components/view-results/view-results.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PasswordComponent,
    AccountComponent,
    DomainComponent,
    PasteComponent,
    ViewResultsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

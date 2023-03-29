import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../modules/material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BreachComponent } from './components/breach/breach.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PasswordComponent } from './components/password/password.component';
import { PasteComponent } from './components/paste/paste.component';
import { ViewResultsComponent } from './components/view-results/view-results.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    PasswordComponent,
    BreachComponent,
    PasteComponent,
    ViewResultsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

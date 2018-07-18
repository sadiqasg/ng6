import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './dashboard/customers/customers.component';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { UsersComponent } from './dashboard/users/users.component';
import { VendorsComponent } from './dashboard/vendors/vendors.component';
import { WorkersComponent } from './dashboard/workers/workers.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    CustomersComponent,
    ReportsComponent,
    UsersComponent,
    VendorsComponent,
    WorkersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkersComponent } from './workers/workers.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CustomersComponent } from './customers/customers.component';
import { VendorsComponent } from './vendors/vendors.component';
import { UsersComponent } from './users/users.component';
import { ReportsComponent } from './reports/reports.component';
import { SignupComponent } from './signup/signup.component';
import { PaymentplanComponent } from './paymentplan/paymentplan.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WorkersComponent,
    SidenavComponent,
    CustomersComponent,
    VendorsComponent,
    UsersComponent,
    ReportsComponent,
    SignupComponent,
    PaymentplanComponent,
    LoginComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}

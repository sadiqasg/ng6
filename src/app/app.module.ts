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
import { PlansAndPricingComponent } from './dashboard/plans-and-pricing/plans-and-pricing.component';
import { HowItWorksComponent } from './dashboard/how-it-works/how-it-works.component';
import { LayoutComponent } from './layout/layout.component';
import { NavComponent } from './layout/nav/nav.component';
import { LandingComponent } from './dashboard/landing/landing.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { PlansComponent } from './plans/plans.component';

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
    WorkersComponent,
    PlansAndPricingComponent,
    HowItWorksComponent,
    LayoutComponent,
    NavComponent,
    LandingComponent,
    SettingsComponent,
    PlansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

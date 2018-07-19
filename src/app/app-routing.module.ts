import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './authentication/signup/signup.component';
import { LoginComponent } from './authentication/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './dashboard/landing/landing.component';
import { CustomersComponent } from './dashboard/customers/customers.component';
import { HowItWorksComponent } from './dashboard/how-it-works/how-it-works.component';
import { PlansAndPricingComponent } from './dashboard/plans-and-pricing/plans-and-pricing.component';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { UsersComponent } from './dashboard/users/users.component';
import { VendorsComponent } from './dashboard/vendors/vendors.component';
import { WorkersComponent } from './dashboard/workers/workers.component';
import { NavComponent } from './layout/nav/nav.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent },
  {path: 'landing', component: LandingComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'how-it-works', component: HowItWorksComponent},
  {path: 'plans-and-pricing', component: PlansAndPricingComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'vendors', component: VendorsComponent},
  {path: 'workers', component: WorkersComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nav', component: NavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

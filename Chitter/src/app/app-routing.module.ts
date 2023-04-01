import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AssistanceComponent } from './assistance/assistance.component';
import { BudgetsComponent } from './budgets/budgets.component';
import { FooterComponent } from './footer/footer.component';
import { GoalsComponent } from './goals/goals.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path:'app-accounts', component: AccountsComponent},
  {path:'app-budgets', component:BudgetsComponent},
  {path:'app-goals', component:GoalsComponent},
  {path:'app-home',component:HomeComponent},
  {path:'app-profile',component:ProfileComponent},
  {path:'app-assistance', component:AssistanceComponent},
  {path:'app-settings', component:SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

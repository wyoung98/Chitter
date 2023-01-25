import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BudgetsComponent } from './budgets/budgets.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ProfileComponent } from './profile/profile.component';
import { GoalsComponent } from './goals/goals.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BudgetsComponent,
    AccountsComponent,
    ProfileComponent,
    GoalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

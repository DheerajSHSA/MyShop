import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MainComponent } from './components/main/main.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { OwnerPanelComponent } from './components/owner-panel/owner-panel.component';
import { NewItemComponent } from './components/new-item/new-item.component';
import { RemoveAnItemComponent } from './components/remove-an-item/remove-an-item.component';
import { FlagOutOfStockComponent } from './components/flag-out-of-stock/flag-out-of-stock.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    LogoutComponent,
    MainComponent,
    AdminPanelComponent,
    OwnerPanelComponent,
    NewItemComponent,
    RemoveAnItemComponent,
    FlagOutOfStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

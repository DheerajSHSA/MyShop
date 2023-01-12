import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { ChangeNameComponent } from './components/change-name/change-name.component';
import { FlagBackInStockComponent } from './components/flag-back-in-stock/flag-back-in-stock.component';
import { FlagOutOfStockComponent } from './components/flag-out-of-stock/flag-out-of-stock.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MainComponent } from './components/main/main.component';
import { NewItemComponent } from './components/new-item/new-item.component';
import { OwnerPanelComponent } from './components/owner-panel/owner-panel.component';
import { RemoveAnItemComponent } from './components/remove-an-item/remove-an-item.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'shopping', component: MainComponent },
  { path: 'ownerpanel', component: OwnerPanelComponent },
  { path: 'adminpanel', component: AdminPanelComponent },
  { path: 'ownerpanel/new-item', component: NewItemComponent },
  { path: 'ownerpanel/remove-an-item', component: RemoveAnItemComponent },
  { path: 'ownerpanel/flag-out-of-stock', component: FlagOutOfStockComponent },
  { path: 'ownerpanel/flag-back-in-stock', component: FlagBackInStockComponent },
  { path: 'ownerpanel/change-name', component: ChangeNameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MainComponent } from './main/main.component';
import { NewItemComponent } from './new-item/new-item.component';
import { OwnerPanelComponent } from './owner-panel/owner-panel.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'shopping', component: MainComponent },
  { path: 'ownerpanel', component: OwnerPanelComponent },
  { path: 'adminpanel', component: AdminPanelComponent },
  { path: 'ownerpanel/new-item', component: NewItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

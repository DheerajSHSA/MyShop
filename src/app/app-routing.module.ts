import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MainComponent } from './components/main/main.component';
import { NewItemComponent } from './components/new-item/new-item.component';
import { OwnerPanelComponent } from './components/owner-panel/owner-panel.component';
import { SignupComponent } from './components/signup/signup.component';

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

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  invalidLogin: boolean = false;
  isLoggedIn: boolean = false;
  constructor(public router: Router) { }

  login(username: string, password: string) {
    if(username === 'owner' || password === 'owner')
    {
      this.router.navigate(['ownerpanel'])
      this.isLoggedIn = true; 
      this.invalidLogin = true;
    }
    else if(username === 'customer' && password === 'dummy')
    {
      this.router.navigate(['shopping']);
      this.isLoggedIn = true;
      this.invalidLogin = false;
    }
    else if(username === 'admin' && password === 'admin')
    {
      this.router.navigate(['adminpanel']);
      this.isLoggedIn = true;
      this.invalidLogin = false;
    }
    else{
      this.invalidLogin = true;
      this.isLoggedIn = false;
    }
  }

  logout() {
    this.isLoggedIn = false;
  }

}

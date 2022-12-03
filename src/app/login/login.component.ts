import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname: string = ''
  upass: string = ''
  invalidLogin: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  handleLogin()
  {
    if(this.uname === '' || this.upass === '')
    {
      this.invalidLogin = true;
    }
    else{
      this.invalidLogin = false;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../../services/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname: string = ''
  upass: string = ''
  constructor(public service: AuthenticationServiceService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if (this.uname !== '' && this.upass !== '') {
      this.service.login(this.uname, this.upass);
    }
    else{
      this.service.invalidLogin = true;
    }
  }
}

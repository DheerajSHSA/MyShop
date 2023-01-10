import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  fname: string = ''
  lname: string = ''
  uname: string = ''
  upass: string = ''
  
  invalidLogin: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  handleSignUp() {
    if(this.fname === '' || this.lname === '' || this.uname === '' || this.upass === '')
    {
      this.invalidLogin = true;
    }
    else{
      this.invalidLogin = false;
    }
  }
}

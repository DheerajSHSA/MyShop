import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../../services/authentication-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  fCounter: number = 0;

  constructor(public service: AuthenticationServiceService) { }

  ngOnInit(): void {
    this.service.isLoggedIn = false;
  }

  feedbackHandle() {
    this.fCounter++;
  }
}

import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from 'src/app/services/header-service.service';
import { AuthenticationServiceService } from '../../services/authentication-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    public service: AuthenticationServiceService,
    public headerService: HeaderServiceService
    ) { }

  ngOnInit(): void {
  }

  //Function to invoke the logout method in the Service
  logout() {
    this.service.logout();
  }
}

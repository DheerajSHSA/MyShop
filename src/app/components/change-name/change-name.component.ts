import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderServiceService } from 'src/app/services/header-service.service';

@Component({
  selector: 'app-change-name',
  templateUrl: './change-name.component.html',
  styleUrls: ['./change-name.component.css']
})
export class ChangeNameComponent implements OnInit {
  heading: string = 'Update the Name'
  newName: string = ''
  constructor(
    private router: Router,
    public headerService: HeaderServiceService
  ) { }

  ngOnInit(): void {
  }

  //Function for navigation to the Main Menu
  back(): void {
    this.router.navigate(['ownerpanel'])
  }

  //Function to invoke the changeName method in the service
  changeName(name: string): void {
    this.headerService.changeName(name);
  }
}

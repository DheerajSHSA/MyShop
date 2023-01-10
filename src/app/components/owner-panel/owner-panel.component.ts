import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-panel',
  templateUrl: './owner-panel.component.html',
  styleUrls: ['./owner-panel.component.css']
})
export class OwnerPanelComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  //Function for navigation to the Adding a new Item Page
  addNewItem(): void {
    this.router.navigate(['ownerpanel/new-item'])
  }
  
  //Function for navigation to the Removing an Item Page
  removeAnItem(): void {
    this.router.navigate(['ownerpanel/remove-an-item'])
  }


}

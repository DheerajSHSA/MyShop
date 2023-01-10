import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-owner-panel',
  templateUrl: './owner-panel.component.html',
  styleUrls: ['./owner-panel.component.css']
})
export class OwnerPanelComponent implements OnInit {

  constructor(
    private router: Router,
    public itemsService: ItemsService
  ) { }

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

  //Function for navigation to the Flag Out of Stock Items Page
  flagOutOfStock(): void {
    this.router.navigate(['ownerpanel/flag-out-of-stock'])
  }

  //Function for invoking the removeAll method in the itemsService
  removeAllItems(): void {
    if (confirm('Are you Sure You intend to clear all the Items?'))
      this.itemsService.removeAllTheItems()
  }


}

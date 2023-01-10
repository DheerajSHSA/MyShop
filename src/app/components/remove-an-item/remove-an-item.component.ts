import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-remove-an-item',
  templateUrl: './remove-an-item.component.html',
  styleUrls: ['./remove-an-item.component.css']
})
export class RemoveAnItemComponent implements OnInit {

  constructor(
    public itemService: ItemsService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  // Function made for redirecting the use back to the main menu
  back(): void {
    this.router.navigate(['ownerpanel'])
  }


  // Function made for onClick event of the Remove Button on the Page
  removeItem(item: Item) {
    this.itemService.removeItem(item);
  }

}

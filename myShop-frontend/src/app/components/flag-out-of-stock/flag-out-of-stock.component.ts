import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-flag-out-of-stock',
  templateUrl: './flag-out-of-stock.component.html',
  styleUrls: ['./flag-out-of-stock.component.css']
})
export class FlagOutOfStockComponent implements OnInit {

  constructor(
    public itemService: ItemsService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  //Function for navigation back to the main menu
  back(): void {
    this.router.navigate(['ownerpanel'])
  }

  //Function to invoke flagOutOfStock method in the itemService
  outOfStock(item: Item): void {
    this.itemService.outOfStock(item)
  }
}

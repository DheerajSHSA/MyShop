import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-flag-back-in-stock',
  templateUrl: './flag-back-in-stock.component.html',
  styleUrls: ['./flag-back-in-stock.component.css']
})
export class FlagBackInStockComponent implements OnInit {

  constructor(
    public itemService: ItemsService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  //Function to navigation to the main menu
  back(): void {
    this.router.navigate(['ownerpanel'])
  }

  //Function to invoke the backInStock method in the itemService
  backInStock(item: Item): void {
    this.itemService.backInStock(item);
  }

}

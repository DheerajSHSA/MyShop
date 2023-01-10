import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-remove-an-item',
  templateUrl: './remove-an-item.component.html',
  styleUrls: ['./remove-an-item.component.css']
})
export class RemoveAnItemComponent implements OnInit {

  constructor(public itemService: ItemsService) { }

  ngOnInit(): void {
  }

  // Function made for onClick event of the Remove Button on the Page
  removeItem(item: Item) {
    this.itemService.removeItem(item);
  }

}

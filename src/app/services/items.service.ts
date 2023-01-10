import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  // Temporary Database for Items in Stock
  items: [Item] = [
    // Temporary Example for Item
    new Item('Ring', 'https://staticimg.titan.co.in/Tanishq/Catalog/513218FPLAA00_1.jpg', 99)
  ]

  // Temporary Database for Item out of Stock
  itemsOutOfStock: [Item] = [
    new Item('ExampleOutOfStockItem', '', 0)
  ]

  constructor() { }

  // Function to remove the Item from the Database
  removeItem(itemToRemove: Item): void {
    this.items.splice(this.items.indexOf(itemToRemove), 1);
  }

  // Function to remove all the Items from the Database
  removeAllTheItems(): void {
    this.items.splice(0)
  }

  // Function to flag an Item as out of Stock
  outOfStock(itemToFlag: Item): void {
    this.itemsOutOfStock.push(itemToFlag)
  }

}


import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  // Temporary Database
  items: [Item] = [
    // Temporary Example for Item
    new Item('Ring', 'https://staticimg.titan.co.in/Tanishq/Catalog/513218FPLAA00_1.jpg', 99)
  ]
  constructor() { }

  // Function to remove the Item from the Database
  removeItem(itemToRemove: Item): void {
    this.items.splice(this.items.indexOf(itemToRemove), 1);

  }
}

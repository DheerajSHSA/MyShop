import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  items: [Item] = [
    new Item('Ring', 'https://staticimg.titan.co.in/Tanishq/Catalog/513218FPLAA00_1.jpg', 99)
  ]
  constructor() { }
}

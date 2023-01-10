import { Injectable } from '@angular/core';
import { Item } from '../item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  items: [Item] = [
    new Item('Example Item', new File([], "exampleFileName"), 99)
  ]
  constructor() { }
}

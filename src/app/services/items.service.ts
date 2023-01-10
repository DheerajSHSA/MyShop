import { Injectable } from '@angular/core';
import { Item } from '../item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  items: [Item] = [
    new Item('', new File([], ''), 0)
  ]
  constructor() { }
}

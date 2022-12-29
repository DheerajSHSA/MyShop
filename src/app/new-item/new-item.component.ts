import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  name: string = 'Ring'
  link: string = ''
  price: number = 0 
  constructor() { }

  ngOnInit(): void {
  }

  add(item: Item)
  {
    
  }

}




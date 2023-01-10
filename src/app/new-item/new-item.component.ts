import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  name: string = '';
  imageLink: string = ''
  price: number = 0;
  constructor(
    private router: Router,
    private itemService: ItemsService
  ) { }

  ngOnInit(): void {
  }

  //To add an Item to the database
  add() {
    this.itemService.items.push(new Item(this.name, this.imageLink, this.price));
    this.router.navigate(['shopping']);
  }

}




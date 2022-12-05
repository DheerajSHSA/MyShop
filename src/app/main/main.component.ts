  import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

  @Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
  })

  export class MainComponent implements OnInit {
    items = [
      new Item('Ring','https://images.pexels.com/photos/204993/pexels-photo-204993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',399)
    ]
    
    constructor() { }

    ngOnInit(): void {
    }

  }

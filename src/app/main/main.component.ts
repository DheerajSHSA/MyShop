import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  // counter for removal of the default Item template that is placed in the array
  counter: number = 0;
  constructor(
    public itemService: ItemsService
  ) { }

  ngOnInit(): void {
    //To be able to POP only the template POP if the counter is zero
    if (this.counter == 0) {
      this.pop();
      this.counter++;
    }
  }

  pop(): void {
    this.itemService.items.shift;
  }

}

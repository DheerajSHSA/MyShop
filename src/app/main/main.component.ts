import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  itema: number = 0;
  itemb: number = 0;
  itemc: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  addA() {
    this.itema++;
  }
  addB() {
    this.itemb++;
  }
  addC() {
    this.itemc++;
  }
  delA() {
    this.itema--;
  }
  delB() {
    this.itemb--;
  }
  delC() {
    this.itemc--;
  }

}

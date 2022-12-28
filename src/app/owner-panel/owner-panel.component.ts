import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-panel',
  templateUrl: './owner-panel.component.html',
  styleUrls: ['./owner-panel.component.css']
})
export class OwnerPanelComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addNewItem(): void { 
    this.router.navigate(['ownerpanel/new-item'])
  }

}

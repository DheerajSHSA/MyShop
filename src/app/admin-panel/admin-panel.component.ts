import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  
  
  users = [
    new User(1, 'Dheeraj', false),
    new User(2, 'Ekam', false),
    new User(3, 'Shabad', false),
    new User(4, 'Dheeraj', false),
    new User(5, 'Ekam', false),
    new User(6, 'Shabad', false),
    new User(7, 'Dheeraj', false),
    new User(8, 'Ekam', false),
    new User(9, 'Shabad', false),
    new User(10, 'Dheeraj', false)
  ]


  constructor() { }

  ngOnInit(): void {
  }

}

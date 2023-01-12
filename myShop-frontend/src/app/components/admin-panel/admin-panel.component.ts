import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Blocked } from '../../models/blocked';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})

export class AdminPanelComponent implements OnInit {


  users = [
    new User(1, 'Dheeraj', Blocked.No),
    new User(2, 'Ekam', Blocked.No),
    new User(3, 'Shabad', Blocked.No),
    new User(4, 'Dheeraj', Blocked.No),
    new User(5, 'Ekam', Blocked.No),
    new User(6, 'Shabad', Blocked.No),
    new User(7, 'Dheeraj', Blocked.No),
    new User(8, 'Ekam', Blocked.No),
    new User(9, 'Shabad', Blocked.No),
    new User(10, 'Dheeraj', Blocked.No)
  ]


  constructor() { }

  ngOnInit(): void {
  }

}

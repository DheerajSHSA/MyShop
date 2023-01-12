import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderServiceService {
  title: string = 'My Shop'
  constructor() { }

  changeName(updatedName: string): void {
    this.title = updatedName;
  }
}

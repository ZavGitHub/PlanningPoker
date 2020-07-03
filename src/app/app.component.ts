import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-poker-theme3';
  newName: string; // new name value which we can pass to another child component

  // set new name value from outside
  onNameChanged(name: string) {
    this.newName = name;
  }
}

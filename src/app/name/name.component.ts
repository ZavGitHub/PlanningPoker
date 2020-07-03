import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  
  isNameHidden: boolean = false;  
  name: FormControl = new FormControl();
  
  @Output() 
  changeName = new EventEmitter<string>(); // custom event to change name
  
  constructor() { }

  ngOnInit(): void {
  }

  submitName(): void {
    console.log(this.name.value);
    this.changeName.emit(this.name.value); // emit new event when name is changed and pass name value to the event
    this.isNameHidden = true; // hide submit button
  }

  onCheckboxClick(): void {
    console.log("You are a watcher");
    this.isNameHidden = true;
  }

}

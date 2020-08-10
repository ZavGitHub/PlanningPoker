import { Component, OnInit, Input } from '@angular/core';
import { EstimateDataDto } from 'src/app/dto/EstimateDataDto';

@Component({
  selector: 'app-card-list',
  template: `<app-card *ngFor="let card of cards" [estimateValue] = "card.estimate" [nameValue] = "this.name"></app-card>`,
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  
  @Input()
  name: string;

  cards: EstimateDataDto[] = [
    new EstimateDataDto(this.name, 0),
    new EstimateDataDto(this.name, 0.5),
    new EstimateDataDto(this.name, 1),
    new EstimateDataDto(this.name, 2),
    new EstimateDataDto(this.name, 3),
    new EstimateDataDto(this.name, 5),
    new EstimateDataDto(this.name, 8),
    new EstimateDataDto(this.name, 13),
    new EstimateDataDto(this.name, 20),
    new EstimateDataDto(this.name, 40),
    new EstimateDataDto(this.name, 99)
  ]; 

  constructor() {
  }

  ngOnInit(): void {
  }

}

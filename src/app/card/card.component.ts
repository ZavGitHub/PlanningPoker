import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstimatesService } from '../services/estimates.service';
import { EstimateDataDto } from '../dto/EstimateDataDto';

@Component({
  selector: 'app-card',
  template: `<button mat-raised-button class="card" color="primary" (click)="onClick()">{{ this.estimateValue }}</button>`,
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  
  @Input()
  estimateValue: number;
  @Input()
  nameValue: string; // name which we get from Parent html by passing a parameter

  postEstimateUrl: string = 'http://localhost:3000/estimate';
  getEstimatesUrl: string = 'http://localhost:3000/estimates';
  
  constructor(private estimatesService: EstimatesService) {    
  }
  
  postData = new EstimateDataDto(this.nameValue, this.estimateValue);

  ngOnInit(): void {
    this.estimatesService.get(this.getEstimatesUrl).subscribe(value => {
      console.log(value);
    });
  }

  onClick(): void {
    this.postData.estimate = this.estimateValue; // get estimate value from clicked card and pass to postData object     
    this.postData.name = this.nameValue; // get name value from name form and pass to postData object 
    this.estimatesService.post(this.postEstimateUrl, this.postData).toPromise().then(data => {
      console.log(data);
    });;
  }
}

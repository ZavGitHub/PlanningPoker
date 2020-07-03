import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstimatesService } from '../services/estimates.service';

@Component({
  selector: 'app-card',
  template: `<button mat-raised-button class="card" color="primary" (click)="onClick()">{{ estimateValue }}</button>`,
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  
  @Input()
  estimateValue: number = 0;
  @Input()
  nameValue: string; // name which we get from Parent html by passing a parameter

  url: string = 'http://localhost:3000/estimate';
  getEstimatesUrl: string = 'http://localhost:3000/estimates';
  
  constructor(private http: HttpClient, private estimatesService: EstimatesService) {    
  }
  
  postData = {
    name: this.nameValue,
    estimates: this.estimateValue,
  };

  ngOnInit(): void {
    this.estimatesService.get(this.getEstimatesUrl).subscribe(value => {
      console.log(value);
    });
  }

  onClick(): void {
    this.postData.estimates = this.estimateValue; // get estimate value from clicked card and pass to postData object 
    this.postData.name = this.nameValue; // get name value from name form and pass to postData object 
    this.http.post(this.url, this.postData).toPromise().then(data => {
      console.log(data);
    });
  }
}

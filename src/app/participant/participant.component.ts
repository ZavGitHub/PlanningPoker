import { Component, OnInit, Input } from '@angular/core';
import { EstimatesService } from '../services/estimates.service';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-participant',
  template: `
    <div>
      <p *ngFor="let participant of participants | async">
        <button mat-raised-button class="estimation">{{ participant.estimates }}</button>
        {{ participant.name }}
      </p>
    </div>
  `,
  styleUrls: ['./participant.component.css'],
})
export class ParticipantComponent implements OnInit {
  
  estimatesUrl: string = 'http://localhost:3000/estimates';
  participantEstimation: number = 8;
  name: string = '';
  participants: Observable<any>;

  constructor(private estimatesService: EstimatesService) { }

  ngOnInit(): void {
    interval(3000).subscribe(() => {
      this.participants = this.estimatesService.get(this.estimatesUrl);
    });
  }

}

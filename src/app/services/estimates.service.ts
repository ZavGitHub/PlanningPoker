import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstimateDataDto } from '../dto/EstimateDataDto';

@Injectable({
  providedIn: 'root'
})
export class EstimatesService {

  constructor(private httpClient: HttpClient) { }

  public get(url: string): Observable<any> {
    return this.httpClient.get(url);
  }
  
  public post(url: string, postData: EstimateDataDto): Observable<any> {
    return this.httpClient.post(url, postData);
  }
}

import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Service } from '../../models/service.model';
import { AppUser } from '../../models/appuser.model';
import { Rate } from '../../models/rate.model';

@Injectable({
  providedIn: 'root'
})
export class ApproveService {

  constructor(private httpClient: HttpClient) { }

  private parseData(res: Response) {
    return res.json() || [];
  }

  private handleError(error: Response | any) {
    let errorMessage: string;
    errorMessage = error.message ? error.message : error.toString();
    return Observable.throw(errorMessage);
  }

  getAllUsers(): Observable<AppUser[]> {
    return this.httpClient.get<AppUser[]>('http://localhost:51680/api/AppUsers')
  }

  approveUser(id:number): Observable<Rate> {
    let rate: Rate;
    rate = new Rate(10);
    return this.httpClient.put<Rate>('http://localhost:51680/api/AppUsers/Approve/'+ id,rate);
  }

  getAllServices(): Observable<Service[]> {
    return this.httpClient.get<Service[]>('http://localhost:51680/api/Services')
  }

  approveSer(id:number): Observable<Rate> {
    let rate: Rate;
    rate = new Rate(10);
    return this.httpClient.put<Rate>('http://localhost:51680/api/Services/Approve/'+ id,rate);
  }
}

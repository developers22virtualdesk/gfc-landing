import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { GHL } from '../models/ghl.models';

@Injectable({
  providedIn: 'root',
})
export class GHLService
{
  constructor(private http: HttpClient) { }

  postGeneralForm(body: GHL.IGeneral): Observable<boolean>
  {
    const type = 'general';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<boolean>(`http://localhost:3000/api/hello?lead=${type}`, body, httpOptions).pipe(share());
  }

  postClientForm(body: GHL.IClient): Observable<boolean> {
    const type = 'client';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<boolean>(`http://localhost:3000/api/hello?lead=${type}`, body, httpOptions).pipe(share());
  }

  postPartnerForm(body: GHL.IPartner): Observable<boolean> {
    const type = 'partner';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<boolean>(`http://localhost:3000/api/hello?lead=${type}`, body, httpOptions).pipe(share());
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { FORM_TYPE } from '../enums/form.enum';
import { GHL } from '../models/ghl.models';

@Injectable({
  providedIn: 'root',
})
export class GHLService
{
  constructor(private http: HttpClient) { }

  postGeneralForm(body: GHL.IGeneral): Observable<boolean>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<boolean>(`${process.env['API_KEY']}/lead?lead=${FORM_TYPE.General}`, body, httpOptions).pipe(share());
  }

  postClientForm(body: GHL.IClient): Observable<boolean> {
    const type = 'client';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<boolean>(`${process.env['API_KEY']}/lead?lead=${FORM_TYPE.Client}`, body, httpOptions).pipe(share());
  }

  postPartnerForm(body: GHL.IPartner): Observable<boolean> {
    const type = 'partner';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<boolean>(`${process.env['API_KEY']}/lead?lead=${FORM_TYPE.Partner}`, body, httpOptions).pipe(share());
  }
}

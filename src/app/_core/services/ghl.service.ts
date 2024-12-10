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

  postGeneralForm(body: GHL.IGeneral): any
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return fetch('/.netlify/functions/hello-world')
		.then(response => response.json()
	)
    return this.http.post<boolean>(`/api/general`, body, httpOptions).pipe(share());

  }

  postClientForm(body: GHL.IClient): Observable<boolean>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<boolean>(`/api/client`, body, httpOptions).pipe(share());
  }

  postPartnerForm(body: GHL.IPartner): Observable<boolean>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<boolean>(`/api/partner`, body, httpOptions).pipe(share());
  }
}

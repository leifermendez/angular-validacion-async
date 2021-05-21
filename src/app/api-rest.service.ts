import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  private headerCustom: HttpHeaders;

  constructor(private httpClient: HttpClient) {
  }

  searchTrack({q}: TrackModel): Observable<any> {

    this.headerCustom = new HttpHeaders({
      Authorization: `Bearer ${environment.token}`
    });

    return this.httpClient.get(`${environment.url}?q=${q}&type=track&limit=10`,
      {headers: this.headerCustom});
  }
}

export class TrackModel {
  q: string;
}

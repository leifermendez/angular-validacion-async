import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  private headerCustom: HttpHeaders;

  constructor(private httpClient: HttpClient) {
  }

  checkUsername(username: string): Observable<any> {
    console.log(username);
    this.headerCustom = new HttpHeaders({
      Authorization: 'fe2d9bf9-57302120-25d39b29-04785101'
    });

    return this.httpClient.get(`https://fortniteapi.io/v1/lookup?username=${username}`, {
      headers: this.headerCustom
    });
  }

}

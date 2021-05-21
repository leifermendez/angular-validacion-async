import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ApiRestService} from './api-rest.service';
import {FormControl} from '@angular/forms';
import {debounceTime, finalize, map, switchMap, tap} from 'rxjs/operators';
import {fromEvent, of} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLoading = false;
  public src: string;
  public data$: any;

  constructor(private apiRest: ApiRestService) {
  }

  search(value: any): any {
    this.isLoading = true;

    this.data$ = this.apiRest.searchTrack({q: value})
      .pipe(
        map(({tracks}) => tracks.items),
        finalize(() => this.isLoading = false)
      )
  }
}

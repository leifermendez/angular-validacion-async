import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ApiRestService} from './api-rest.service';
import {AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {debounceTime, finalize, map, switchMap, tap} from 'rxjs/operators';
import {fromEvent, of} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiRestService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      nickname: ['', {
        validators: [
          Validators.required
        ],
        asyncValidators: [
          nicknameCheck(this.api)
        ],
        updateOn: 'blur' // or 'change' or 'submit'
      }]
    });
  }
}


export function nicknameCheck(api: any): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return api.checkUsername(control.value)
      .pipe(
        map(({result}) => (result) ? {nicknameExists: true} : null)
      );
  };
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSearchComponent } from './auto-search.component';

describe('AutoSearchComponent', () => {
  let component: AutoSearchComponent;
  let fixture: ComponentFixture<AutoSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

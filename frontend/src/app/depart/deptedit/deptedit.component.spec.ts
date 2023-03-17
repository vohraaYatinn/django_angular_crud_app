import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepteditComponent } from './deptedit.component';

describe('DepteditComponent', () => {
  let component: DepteditComponent;
  let fixture: ComponentFixture<DepteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepteditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

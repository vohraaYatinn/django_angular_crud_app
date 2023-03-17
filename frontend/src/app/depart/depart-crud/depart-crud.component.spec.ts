import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartCrudComponent } from './depart-crud.component';

describe('DepartCrudComponent', () => {
  let component: DepartCrudComponent;
  let fixture: ComponentFixture<DepartCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

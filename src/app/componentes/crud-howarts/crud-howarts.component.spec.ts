import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudHowartsComponent } from './crud-howarts.component';

describe('CrudHowartsComponent', () => {
  let component: CrudHowartsComponent;
  let fixture: ComponentFixture<CrudHowartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudHowartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudHowartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

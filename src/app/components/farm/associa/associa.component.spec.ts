import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociaComponent } from './associa.component';

describe('AssociaComponent', () => {
  let component: AssociaComponent;
  let fixture: ComponentFixture<AssociaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

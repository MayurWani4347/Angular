import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoratechComponent } from './woratech.component';

describe('WoratechComponent', () => {
  let component: WoratechComponent;
  let fixture: ComponentFixture<WoratechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WoratechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WoratechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

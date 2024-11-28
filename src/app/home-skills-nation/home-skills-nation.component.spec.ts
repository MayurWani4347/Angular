import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSkillsNationComponent } from './home-skills-nation.component';

describe('HomeSkillsNationComponent', () => {
  let component: HomeSkillsNationComponent;
  let fixture: ComponentFixture<HomeSkillsNationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSkillsNationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSkillsNationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEmpireComponent } from './header-empire.component';

describe('HeaderEmpireComponent', () => {
  let component: HeaderEmpireComponent;
  let fixture: ComponentFixture<HeaderEmpireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderEmpireComponent]
    });
    fixture = TestBed.createComponent(HeaderEmpireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

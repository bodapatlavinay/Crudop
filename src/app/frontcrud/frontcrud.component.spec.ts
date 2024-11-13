import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontcrudComponent } from './frontcrud.component';

describe('FrontcrudComponent', () => {
  let component: FrontcrudComponent;
  let fixture: ComponentFixture<FrontcrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontcrudComponent]
    });
    fixture = TestBed.createComponent(FrontcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

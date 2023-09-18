import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BATATALComponent } from './batatal.component';

describe('BATATALComponent', () => {
  let component: BATATALComponent;
  let fixture: ComponentFixture<BATATALComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BATATALComponent]
    });
    fixture = TestBed.createComponent(BATATALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdpComponent } from './udp.component';

describe('UdpComponent', () => {
  let component: UdpComponent;
  let fixture: ComponentFixture<UdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UdpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

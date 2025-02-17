import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGenComponent } from './data-gen.component';

describe('DataGenComponent', () => {
  let component: DataGenComponent;
  let fixture: ComponentFixture<DataGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataGenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

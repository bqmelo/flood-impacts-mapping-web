import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanosComponent } from './danos.component';

describe('DanosComponent', () => {
  let component: DanosComponent;
  let fixture: ComponentFixture<DanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DanosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

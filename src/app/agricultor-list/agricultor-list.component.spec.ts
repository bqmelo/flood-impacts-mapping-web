import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgricultorListComponent } from './agricultor-list.component';

describe('AgricultorListComponent', () => {
  let component: AgricultorListComponent;
  let fixture: ComponentFixture<AgricultorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgricultorListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgricultorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

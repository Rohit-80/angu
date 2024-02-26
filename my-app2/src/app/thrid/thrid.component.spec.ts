import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThridComponent } from './thrid.component';

describe('ThridComponent', () => {
  let component: ThridComponent;
  let fixture: ComponentFixture<ThridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

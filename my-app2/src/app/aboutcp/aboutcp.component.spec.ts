import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutcpComponent } from './aboutcp.component';

describe('AboutcpComponent', () => {
  let component: AboutcpComponent;
  let fixture: ComponentFixture<AboutcpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutcpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

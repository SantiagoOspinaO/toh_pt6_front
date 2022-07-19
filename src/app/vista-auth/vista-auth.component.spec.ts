import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAuthComponent } from './vista-auth.component';

describe('VistaAuthComponent', () => {
  let component: VistaAuthComponent;
  let fixture: ComponentFixture<VistaAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

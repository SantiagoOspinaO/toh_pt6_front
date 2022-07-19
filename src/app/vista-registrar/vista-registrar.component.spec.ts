import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaRegistrarComponent } from './vista-registrar.component';

describe('VistaRegistrarComponent', () => {
  let component: VistaRegistrarComponent;
  let fixture: ComponentFixture<VistaRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaRegistrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

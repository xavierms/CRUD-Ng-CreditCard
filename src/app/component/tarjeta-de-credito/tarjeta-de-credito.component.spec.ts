import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaDeCreditoComponent } from './tarjeta-de-credito.component';

describe('TarjetaDeCreditoComponent', () => {
  let component: TarjetaDeCreditoComponent;
  let fixture: ComponentFixture<TarjetaDeCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaDeCreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaDeCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

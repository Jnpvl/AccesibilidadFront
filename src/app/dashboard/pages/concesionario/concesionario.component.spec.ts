import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcesionarioComponent } from './concesionario.component';

describe('ConcesionarioComponent', () => {
  let component: ConcesionarioComponent;
  let fixture: ComponentFixture<ConcesionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcesionarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcesionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

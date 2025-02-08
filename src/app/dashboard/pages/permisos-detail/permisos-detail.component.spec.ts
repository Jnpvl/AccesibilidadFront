import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisosDetailComponent } from './permisos-detail.component';

describe('PermisosDetailComponent', () => {
  let component: PermisosDetailComponent;
  let fixture: ComponentFixture<PermisosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermisosDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermisosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

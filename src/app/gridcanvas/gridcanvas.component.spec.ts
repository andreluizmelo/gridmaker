import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridcanvasComponent } from './gridcanvas.component';

describe('GridcanvasComponent', () => {
  let component: GridcanvasComponent;
  let fixture: ComponentFixture<GridcanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridcanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridcanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

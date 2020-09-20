import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridmakerformComponent } from './gridmakerform.component';

describe('GridmakerformComponent', () => {
  let component: GridmakerformComponent;
  let fixture: ComponentFixture<GridmakerformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridmakerformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridmakerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

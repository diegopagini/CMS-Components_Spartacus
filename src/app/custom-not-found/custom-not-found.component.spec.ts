import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNotFoundComponent } from './custom-not-found.component';

describe('CustomNotFoundComponent', () => {
  let component: CustomNotFoundComponent;
  let fixture: ComponentFixture<CustomNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

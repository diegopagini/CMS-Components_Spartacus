import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTopHeaderComponent } from './custom-top-header.component';

describe('CustomTopHeaderComponent', () => {
  let component: CustomTopHeaderComponent;
  let fixture: ComponentFixture<CustomTopHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTopHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTopHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

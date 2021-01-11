import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsComponentComponent } from './cms-component.component';

describe('CmsComponentComponent', () => {
  let component: CmsComponentComponent;
  let fixture: ComponentFixture<CmsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

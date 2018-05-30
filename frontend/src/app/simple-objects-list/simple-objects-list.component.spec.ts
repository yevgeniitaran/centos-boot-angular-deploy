import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleObjectsListComponent } from './simple-objects-list.component';

describe('SimpleObjectsListComponent', () => {
  let component: SimpleObjectsListComponent;
  let fixture: ComponentFixture<SimpleObjectsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleObjectsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleObjectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

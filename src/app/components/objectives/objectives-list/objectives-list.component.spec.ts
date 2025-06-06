import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectivesListComponent } from './objectives-list.component';

describe('ObjectivesListComponent', () => {
  let component: ObjectivesListComponent;
  let fixture: ComponentFixture<ObjectivesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectivesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectivesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMember } from './edit-member';

describe('EditMember', () => {
  let component: EditMember;
  let fixture: ComponentFixture<EditMember>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMember],
    }).compileComponents();

    fixture = TestBed.createComponent(EditMember);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

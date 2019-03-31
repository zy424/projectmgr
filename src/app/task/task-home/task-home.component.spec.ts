import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskHomeComponent } from './task-home.component';

describe('TaskHomeComponent', () => {
  let component: TaskHomeComponent;
  let fixture: ComponentFixture<TaskHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  function clickElement(element) {
      const el = fixture.nativeElement.querySelector(element);
      el.click();
      fixture.detectChanges();
      return fixture.whenStable();
  }
    function removeWhitespace(text: string) {
        return text.replace(/\s+/g, ' ').trim();
    }
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should open', () => {
      fixture.detectChanges();
      clickElement('.add-task-btn');
      const label = fixture.nativeElement.querySelector(
          '.mat-dialog-title',
      );
      expect(removeWhitespace(label.textContent)).toContain(
          'Add new task');
  });
});

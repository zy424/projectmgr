import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {
 @Input() header = '';
 @Output() newTask = new EventEmitter<void>();
 @Output() moveTask = new EventEmitter<void>();
 @Output() deleteTask = new EventEmitter<void>();
  constructor() { }
    onNewTaskClick() {
     this.newTask.emit();
    }
    onMoveAllClick() {
      this.moveTask.emit();
    }
    onDeleteClick() {
      this.deleteTask.emit();
    }
  ngOnInit() {
  }

}

import {Component, OnInit, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewTaskComponent} from '../new-task/new-task.component';
import {CopyTaskComponent} from '../copy-task/copy-task.component';
import {ConfirmDialogComponent} from '../../shared/confirm-dialog/confirm-dialog.component';
import {NewTaskListComponent} from '../new-task-list/new-task-list.component';
import {SlideToRight} from '../../animate/router.animate';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
    animations: [
        SlideToRight,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskHomeComponent implements OnInit {
    @HostBinding('@route') state;
  lists = [
      {
        id: 1,
        name: 'To Do',
        tasks: [
          {
            id: 1,
            desc: 'Running',
            completed: true,
            priority: 3,
            owner: {
              id: 1,
              name: 'Lily',
              avatar: 'avatars:svg-11',
            },
            dueDate: new Date(),
          },
          {
            id: 2,
            desc: 'Learning Angular',
            completed: false,
            priority: 2,
            owner: {
                id: 1,
                name: 'Ben',
                avatar: 'avatars:svg-12',
            },
            dueDate: new Date(),
            reminder: new Date(),
          }
        ]
      },
      {
          id: 2,
          name: 'In Progress',
          tasks: [
              {
                  id: 1,
                  desc: 'Running',
                  completed: true,
                  priority: 1,
                  owner: {
                      id: 1,
                      name: 'Lily',
                      avatar: 'avatars:svg-11',
                  },
                  dueDate: new Date(),
              },
              {
                  id: 2,
                  desc: 'Learning Angular',
                  completed: false,
                  priority: 2,
                  owner: {
                      id: 1,
                      name: 'Ben',
                      avatar: 'avatars:svg-12',
                  },
                  dueDate: new Date(),
              }
          ]
      }
  ]
  constructor(private dialog: MatDialog, private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

 launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent, {data: {title: 'Add new task'}});
 }

 launchMoveTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}});
 }

 launchUpdateTaskDialog(task) {
    const dialogRef = this.dialog.open(NewTaskComponent,
                    {data: {title: 'Edit task',
                                  task: task}});
 }

 launchDeleteTaskDialog() {
    this.dialog.open(ConfirmDialogComponent, {data: {title: 'Delete Task', content: 'Are you sure to delete the task?'}});
 }
 openEditListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent,
        {data: {title: 'Edit list'}});
}

 lanuchNewListDialog() {
     const dialogRef = this.dialog.open(NewTaskListComponent,
         {data: {title: 'New list'}});
 }
}

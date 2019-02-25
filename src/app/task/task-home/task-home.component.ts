import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewTaskComponent} from '../new-task/new-task.component';
import {CopyTaskComponent} from '../copy-task/copy-task.component';
import {ConfirmDialogComponent} from '../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {
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
  constructor(private dialog: MatDialog) { }

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
}

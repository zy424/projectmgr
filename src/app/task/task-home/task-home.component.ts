import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}

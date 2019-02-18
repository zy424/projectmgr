import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewProjectComponent} from '../new-project/new-project.component';
import {InviteComponent} from '../invite/invite.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
    public projects = [
        {
            'name': 'Project management platform',
            'desc': 'This is an enterprise project',
            'coverImg': 'assets/img/covers/0.jpg',
        },
        {
            'name': 'Project management platform',
            'desc': 'This is an enterprise project',
            'coverImg': 'assets/img/covers/1.jpg',
        },
        {
            'name': 'Project management platform',
            'desc': 'This is an enterprise project',
            'coverImg': 'assets/img/covers/2.jpg',
        },
    ]

    constructor(private dialog: MatDialog) {
    }

    ngOnInit() {
    }

    openNewProjectDialog() {
        const dialogRef = this.dialog.open(NewProjectComponent, {data: {dark: true}});
        dialogRef.afterClosed().subscribe(result => console.log(result));
    }
    launchInvite() {
        const dialogRef = this.dialog.open(InviteComponent);
    }
}


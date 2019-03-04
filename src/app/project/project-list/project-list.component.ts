import {Component, OnInit, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewProjectComponent} from '../new-project/new-project.component';
import {InviteComponent} from '../invite/invite.component';
import {ConfirmDialogComponent} from '../../shared/confirm-dialog/confirm-dialog.component';
import {ListAnimation} from '../../animate/list.animate';
import {SlideToRight} from '../../animate/router.animate';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [
    ListAnimation,
    SlideToRight,
  ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListComponent implements OnInit {
    @HostBinding('@route') state;
    public projects = [
        {
            'id': 1,
            'name': 'Project management platform',
            'desc': 'This is an enterprise project',
            'coverImg': 'assets/img/covers/0.jpg',
        },
        {
            'id': 2,
            'name': 'Project management platform',
            'desc': 'This is an enterprise project',
            'coverImg': 'assets/img/covers/1.jpg',
        },
    ]

    constructor(private dialog: MatDialog, private cd: ChangeDetectorRef) {
    }

    ngOnInit() {
    }

    openNewProjectDialog() {
        const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: 'Add new project'}});
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            this.projects = [...this.projects,
                {
                    'id': 3,
                    'name': 'Project management platform',
                    'desc': 'This is an enterprise project',
                    'coverImg': 'assets/img/covers/2.jpg',
                }
            ];
            this.cd.markForCheck();
        });
    }
    launchInvite() {
        const dialogRef = this.dialog.open(InviteComponent);
    }
    openEditProjectDialog(item) {
        const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: 'Edit Project', item: item}});
    }
    launchConfirmDialog(project) {
        const dialogRef = this.dialog.open(ConfirmDialogComponent,
            {data: {title: 'Delete Project', content: 'Are you sure to delete the project?'}});
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            this.projects = this.projects.filter(p => {
                return p.id !== project.id;
            });
            this.cd.markForCheck();
        });
    }
}


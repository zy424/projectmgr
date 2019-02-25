import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  template: `
      <h3 mat-dialog-title> {{title}}</h3>
      <div mat-dialog-content>
          {{content}}
      </div>
      <div mat-dialog-actions>
          <button type="button" mat-raised-button color="primary" (click)="onClick(true)">
              Cancel
          </button>
          <button type="button" mat-button mat-dialog-close (click)="onClick(false)">
              Submit
          </button>
      </div>
  `,
  styles: []
})
export class ConfirmDialogComponent implements OnInit {
  title = '';
  content = '';

  constructor(private dialogRef: MatDialogRef<ConfirmDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.content;
  }
  onClick(result: boolean) {
    this.dialogRef.close(result);
  }

}

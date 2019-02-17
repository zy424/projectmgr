import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatDividerModule,
        MatSlideToggleModule,
        MatGridListModule,
    } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatListModule,
      MatDividerModule,
      MatSlideToggleModule,
      MatGridListModule,
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatGridListModule,
  ]
})
export class SharedModule { }

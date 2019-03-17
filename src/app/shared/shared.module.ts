import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
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
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
} from '@angular/material';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {DirectiveModule} from '../directive/directive.module';

@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [
    CommonModule,
      FormsModule,
      ReactiveFormsModule,
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
      MatDialogModule,
      MatAutocompleteModule,
      MatMenuModule,
      MatCheckboxModule,
      MatTooltipModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatRadioModule,
      MatSelectModule,
      MatSidenavModule,
      DirectiveModule
  ],
  exports: [
    CommonModule,
      FormsModule,
      ReactiveFormsModule,
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
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    DirectiveModule
  ],
    entryComponents: [
        ConfirmDialogComponent,
    ]
})
export class SharedModule { }

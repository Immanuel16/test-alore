import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { A11yModule } from '@angular/cdk/a11y';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatRadioModule } from "@angular/material/radio";
import { MatDialogModule } from "@angular/material/dialog";
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar'
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    A11yModule,
    ScrollingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatTabsModule,
    MatStepperModule,
    MatProgressBarModule,
    DragDropModule,
    MatRadioModule,
    MatDialogModule,
    MatMenuModule,
    MatSidenavModule,
    MatTableModule,
    MatDatepickerModule,
    MatToolbarModule
  ],
  exports: [
    A11yModule,
    ScrollingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatStepperModule,
    MatProgressBarModule,
    DragDropModule,
    MatRadioModule,
    MatDialogModule,
    MatMenuModule,
    MatSidenavModule,
    MatTableModule,
    MatDatepickerModule,
    MatToolbarModule
  ],
})
export class MaterialModule { }

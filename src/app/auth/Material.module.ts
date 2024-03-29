import { NgModule } from "@angular/core";
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports:[
    MatTooltipModule,
       MatCardModule,
       MatProgressBarModule,
       MatExpansionModule,
       MatProgressSpinnerModule,
       MatTableModule,
      MatFormFieldModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatSelectModule,
      MatButtonModule,
      MatIconModule,
      MatPaginatorModule
  ],
  exports:[
    MatDatepickerModule,
    MatNativeDateModule,

    MatTooltipModule,
       MatCardModule,
       MatProgressBarModule,
       MatExpansionModule,
       MatProgressSpinnerModule,
       MatTableModule,
       MatFormFieldModule,
       MatInputModule,
       MatSelectModule,
       MatButtonModule,
       MatIconModule,
       MatPaginatorModule
  ]
})

export class MaterialModule{ }

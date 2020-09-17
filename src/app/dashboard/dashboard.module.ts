import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HospitalItemComponent } from './hospital-item/hospital-item.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SearchOptionsModule } from '../search-options/search-options.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';

@NgModule({
  declarations: [DashboardComponent, HospitalItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SearchOptionsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class DashboardModule { }

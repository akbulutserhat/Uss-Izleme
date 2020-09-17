import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KullaniciTanimlamaComponent } from './kullanici-tanimlama.component';
import { FormComponent } from './form/form.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component'
import { SearchOptionsModule } from '../search-options/search-options.module';

@NgModule({
  declarations: [KullaniciTanimlamaComponent, FormComponent, ConfirmDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDialogModule,
    SearchOptionsModule
  ]
})
export class KullaniciTanimlamaModule { }

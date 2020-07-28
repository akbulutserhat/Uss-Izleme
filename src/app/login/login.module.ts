import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { LoginGuard } from './login.guard';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers:[LoginGuard]
})
export class LoginModule { }

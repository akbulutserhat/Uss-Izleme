import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchOptionsPipe } from './search-options.pipe';



@NgModule({
  declarations: [SearchOptionsPipe],
  exports: [SearchOptionsPipe],
  imports: [
    CommonModule
  ]
})
export class SearchOptionsModule { }

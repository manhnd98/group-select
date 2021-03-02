import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectGroupDirective } from './select-group.directive';
import { SelectItemDirective } from './select-item.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [SelectGroupDirective, SelectItemDirective],
  exports: [SelectGroupDirective, SelectItemDirective]
})
export class SelectGroupModule {}

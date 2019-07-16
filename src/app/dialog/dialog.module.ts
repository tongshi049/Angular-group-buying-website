import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './components';
import { CloseDialogDirective } from './directives';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DialogComponent, CloseDialogDirective],
  exports: [DialogComponent, CloseDialogDirective]
})
export class DialogModule { }

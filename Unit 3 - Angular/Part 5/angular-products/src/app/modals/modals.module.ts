import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanDeactivateModalComponent } from './can-deactivate-modal/can-deactivate-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CanDeactivateModalComponent],
  exports: [CanDeactivateModalComponent],
  entryComponents: [CanDeactivateModalComponent]
})
export class ModalsModule { }

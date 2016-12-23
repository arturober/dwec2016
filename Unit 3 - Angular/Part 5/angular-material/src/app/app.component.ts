import { MdDialog, MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';
import { ModalContentComponent } from './modal-content/modal-content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dialogRef: MdDialogRef<ModalContentComponent>;

  constructor(public dialog: MdDialog) { }

  openModal() {
    this.dialogRef = this.dialog.open(ModalContentComponent);

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('result: ' + result);
      this.dialogRef = null;
    });
  }
}

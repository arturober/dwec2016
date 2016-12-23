import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-can-deactivate-modal',
  templateUrl: './can-deactivate-modal.component.html',
  styleUrls: ['./can-deactivate-modal.component.css']
})
export class CanDeactivateModalComponent {
   @Input() title;

   constructor(private activeModal: NgbActiveModal) { }
}

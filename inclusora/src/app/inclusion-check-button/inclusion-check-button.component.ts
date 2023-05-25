import { Component, EventEmitter, Output } from '@angular/core';
import { TextInputComponent } from '../text-input/text-input.component';

@Component({
  selector: 'app-inclusion-check-button',
  templateUrl: './inclusion-check-button.component.html',
  styleUrls: ['./inclusion-check-button.component.css']
})
export class InclusionCheckButtonComponent {

  @Output() highlightRequested = new EventEmitter<void>();

  highlightClicked() {
    this.highlightRequested.emit();
  }
}

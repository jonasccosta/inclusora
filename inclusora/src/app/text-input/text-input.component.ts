import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent {

  @Input() textForm: FormGroup;

  @Input() userEnteredText: string;

  @Output() userEnteredTextChange: EventEmitter<string> = new EventEmitter<string>();


  
}

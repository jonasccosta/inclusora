import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-suggestion-card',
  templateUrl: './suggestion-card.component.html',
  styleUrls: ['./suggestion-card.component.css']
})
export class SuggestionCardComponent {
  @Input() title: string | any;
  @Input() replacements: string;  
  @Input() text: string;
}
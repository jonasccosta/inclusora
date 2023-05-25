import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) { }

  words: string[];

  

  ngOnInit() {
    this.http.get('assets/triggerwords.json').subscribe((data: any) => {
      this.words = data.words;
    });
  }

  highlightMatches() {
    if (!this.userEnteredText || !this.words) {
      return;
    }
  
    const regex = new RegExp(this.words.join('|'), 'gi');
    this.userEnteredText = this.userEnteredText.replace(regex, match => `⚠️${match}`);

  }


  printing(){
    console.log("ERROw")
  }

  
}

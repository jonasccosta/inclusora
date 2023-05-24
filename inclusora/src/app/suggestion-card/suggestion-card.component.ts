import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-suggestion-card',
  templateUrl: './suggestion-card.component.html',
  styleUrls: ['./suggestion-card.component.css']
})
export class SuggestionCardComponent {
  title : string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log("INIT")
    this.http.get('/result', {responseType: 'json'}).subscribe({
      next: (response) => {
      const map = response[Object.keys(response)[0]];
      console.log(Object.keys(map)[0]);
       this.title = Object.keys(map)[0];
      },
      error: (error) => {
        console.log(error)
      }
    });
  }
}

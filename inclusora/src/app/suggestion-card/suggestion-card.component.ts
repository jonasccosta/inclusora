import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-suggestion-card',
  templateUrl: './suggestion-card.component.html',
  styleUrls: ['./suggestion-card.component.css']
})
export class SuggestionCardComponent {

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log("INIT")
    this.http.get<string>('/').subscribe((data: string) => {
      // Handle the received data
      if(data == null){
        console.log("PEPE")
      }

      else{
        console.log(data);
      }
      
      
      // Assign the data to a variable in your component for further use
      // this.myData = data;
    });
  }
}

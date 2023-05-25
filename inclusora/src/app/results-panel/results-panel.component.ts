import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {NgModule}      from '@angular/core';

@Component({
  selector: 'app-results-panel',
  templateUrl: './results-panel.component.html',
  styleUrls: ['./results-panel.component.css']
})
export class ResultsPanelComponent {
  suggestions: any = [];

  constructor(private http: HttpClient) {}


  ngOnInit() {
    this.http.get('/result', {responseType: 'json'}).subscribe({
      next: (response) => {
        this.suggestions = response;
      },
      error: (error) => {
        console.log(error)
      }
    });
  }

}





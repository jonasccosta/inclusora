import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute  } from '@angular/router';
import { TextInputComponent } from '../text-input/text-input.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @ViewChild(TextInputComponent) textInputComponent: TextInputComponent;
  textForm: FormGroup;
  userEnteredText: string;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(){
    this.textForm = this.fb.group({
      userText: ['']
    })
  }

  ngAfterViewInit() {
 }
  

  onSubmit(){
    const userInput = this.textForm.get('userText')?.value;
    this.textInputComponent.highlightMatches();
    this.http.post('/', { userInput })
    .subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (error) => {
        console.log(error)
      }
    });

    this.router.navigate(['/result'], {  state: { userEnteredText: userInput } });
  }



 


}

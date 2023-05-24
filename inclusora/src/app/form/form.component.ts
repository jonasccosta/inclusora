import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  textForm: FormGroup;
  userEnteredText: string;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(){
    this.textForm = this.fb.group({
      userText: ['']
    })
  }

  

  onSubmit(){
    const userInput = this.textForm.get('userText')?.value;
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

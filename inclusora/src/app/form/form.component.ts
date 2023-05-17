import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  textForm: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.textForm = this.fb.group({
      userText: ['']
    })

    
  }

  onSubmit(){
    console.log(this.sendText());
  }

  sendText(){
    return this.textForm.get("userText")?.value;
  }
}

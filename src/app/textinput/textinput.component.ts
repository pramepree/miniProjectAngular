import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.css']
})
export class TextinputComponent {

  firstName: string = '';
  // Add other form field variables here

  constructor() { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData = {
        firstName: form.value.firstName,
        // Add other form field values here
      };
      console.log(formData);
    } else {
      alert('Please fill out all required fields.');
    }
  }
}

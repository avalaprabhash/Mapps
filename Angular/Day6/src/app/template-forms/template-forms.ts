import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-forms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-forms.html',
  styleUrls: ['./template-forms.css'],
})
export class TemplateForms {
  name: string = '';
  minLen = 3;
  password : string = '';

  submitForm() {
    console.log(this.name);
    console.log(this.password);
  }

  dob: string = '';
  age: number = 0;

  calculateAge(){
    const birthDate = new Date(this.dob);
    const today = new Date();

    if (birthDate > today) {
      this.age = 0;
      return;
    }

    let age = today.getFullYear() - birthDate.getFullYear();

    const month = today.getMonth() - birthDate.getMonth();


    if (
      month < 0 ||
      (month === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    this.age = age;
  }


}

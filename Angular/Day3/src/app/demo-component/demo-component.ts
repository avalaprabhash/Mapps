import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './demo-component.html',
  styleUrl: './demo-component.css',
})
export class DemoComponent {
  a = 0;
  b = 0;
   get greater(): number {
    return this.a > this.b ? this.a : this.b;
  }
  get smaller() : number{
    return this.a < this.b ? this.a : this.b;
  }
  name = '';
  get getName():string{
    if(this.name.length >= 3){
      return this.name;
  }
    return "Name should be atleast 3 characters longs"
}

students = [
  { name: 'John', marks: 80 },
  { name: 'Sara', marks: 95 },
  { name: 'Mike', marks: 60 },
  { name: 'Noah', marks: 30 }
];

count = 0;

increment(){
  this.count++;
}

decrement(){
  this.count--;
}

reset(){
  this.count = 0;
}

checked = false;

strike(){
  this.checked = !this.checked; 
}

disabled = false;

access(){
  this.disabled = !this.disabled;
}


say = "Prabhash";
salary = 50000;
today = new Date();




}


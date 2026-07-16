import { Component } from '@angular/core';

@Component({
  selector: 'new-component',
  // templateUrl: './new-component.html',
  template: `<div (click)="old = !old">{{content}}</div>`,
  styleUrl: './new-component.css',
})
export class NewComponent {
  old  = false;
  get content() : string{
     return this.old ?`old-component`: "new-component";

    }
  }


import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 1. Import FormsModule
import { Image } from './image/image';
import { Hover } from './hover/hover';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, Image, Hover],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  // 3. Make sure your variable is declared
  userInput: string = ''; 

  onSubmit() {
    let content = document.getElementById('content');
    if (content) {
      content.innerHTML = `You are typing: <strong>${this.userInput}</strong>`;
    }
  }
}
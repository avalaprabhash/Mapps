import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterMember } from './register-member/register-member';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegisterMember],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}

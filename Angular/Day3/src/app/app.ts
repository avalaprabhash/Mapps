import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './new-component/new-component';
import { Reference } from './reference/reference';
import { DemoComponent } from "./demo-component/demo-component";
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewComponent, Reference, DemoComponent, Login],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Prabhas');
}
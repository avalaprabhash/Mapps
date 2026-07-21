import { Component, signal } from '@angular/core';
import { Theme } from './theme/theme';
import { TemplateForms } from './template-forms/template-forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ Theme, TemplateForms],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('app');
}

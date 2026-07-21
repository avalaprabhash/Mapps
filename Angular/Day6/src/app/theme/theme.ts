import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme',
  standalone: true,
  templateUrl: './theme.html',
  styleUrls: ['./theme.css'],
  imports: [CommonModule],
})
export class Theme {
  toggleTheme() {
    document.body.classList.toggle('dark-theme');
}
}

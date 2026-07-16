import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `

    <button (click)="loggedIn = !loggedIn">
      {{ loggedIn ? 'Log out' : 'Log in' }}
    </button>

    @if (loggedIn) {
      <p>Welcome back, {{ user }}!</p>
    } @else {
      <p>Please log in to continue.</p>
    }

    <hr>

    <h3>Access Control</h3>

    <button (click)="hasAccess = !hasAccess">
      Toggle Access ({{ hasAccess ? 'Granted' : 'Denied' }})
    </button>

    @if (hasAccess) {
      <p style="color: seagreen;">Access granted.</p>
    } @else {
      <p style="color: crimson;">Access denied.</p>
    }
  `
})
export class Login {
  loggedIn = false;
  hasAccess = true;
  user = 'Angular User';
}
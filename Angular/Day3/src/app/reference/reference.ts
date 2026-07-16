import { Component } from '@angular/core';

@Component({
  selector: 'app-reference',
  template: `
    <h3>Template Reference Variables (#var)</h3>
    <div class="toolbar">
      <input #box type="text" placeholder="Type something" (input)="current = box.value" />
      <button (click)="read(box.value)">Read value</button>
      <button (click)="box.focus()">Focus input</button>
      <span>length={{ box.value?.length || 0 }}</span>
    </div>
    <p>Current: {{ current || '(empty)' }}</p>
  `
})
export class Reference {
  current = '';
  read(val: string) { this.current = val ?? ''; }
}

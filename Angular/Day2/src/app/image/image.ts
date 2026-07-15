import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [NgIf],
  templateUrl: './image.html',
  styleUrls: ['./image.css'],
})
export class Image {
  show = false;

  toggleImage(): void {
    this.show = !this.show;
  }

  get imageSrc(): string {
    return this.show ? '/favicon.ico' : '';
  }
}

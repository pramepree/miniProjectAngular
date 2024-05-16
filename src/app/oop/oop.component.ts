import { Component } from '@angular/core';

@Component({
  selector: 'app-oop',
  templateUrl: './oop.component.html',
  styleUrl: './oop.component.css'
})
export class OopComponent {
  fname: any = 'kongruksiam';
  age: number = 20;
  myVar: unknown
  constructor() { this.fname = 'kongruksiam'; }
  1() {
    this.fname = 'kongruksiam';
    this.fname = 123
  }
  2() { this.fname.toUpperCase(); this.fname.perrCase(); }

}
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
})
export class BtnComponent implements OnInit {
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  // @Input() color: 'success' | 'danger' | 'primary' | 'light' | 'sky'= 'primary';
  @Input() color:keyof typeof this.mapColors= 'success'

  mapColors = {
    success: {
      'bg-success-500': true,
      'hover:bg-success-600': true,
      'focus:ring-success-3000': true,
      'text-white': true,
    },
    primary: {
      'bg-primary-500': true,
      'hover:bg-primary-600': true,
      'focus:ring-primary-3000': true,
      'text-white': true,
    },
    danger: {
      'bg-danger-500': true,
      'hover:bg-danger-600': true,
      'focus:ring-danger-3000': true,
      'text-white': true,
    },
    light: {
      'bg-gray-200': true,
      'hover:bg-gray-500': true,
      'focus:ring-gray-50': true,
      'text-gray-700': true,
    },
    sky: {
      'bg-sky-700': true,
      'hover:bg-sky-800': true,
      'focus:ring-sky-300': true,
      'text-white': true,
    }
  }

  constructor() {}

  ngOnInit(): void {}


  get colors(){
    const colors = this.mapColors[this.color];
    if(colors){
      return colors;
    }
    return {};

  }
}

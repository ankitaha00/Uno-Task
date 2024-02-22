import { Component } from '@angular/core';
import { DisplayService } from '../../display.service';

@Component({
  selector: 'app-numeric-button',
  templateUrl: './numeric-button.component.html',
  styleUrls: ['./numeric-button.component.css']
})
export class NumericButtonComponent {
  numericButtons = [
    { name: '7', id: '7', value: '7' },
    { name: '8', id: '8', value: '8' },
    { name: '9', id: '9', value: '9' },
    { name: '4', id: '4', value: '4' },
    { name: '5', id: '5', value: '5' },
    { name: '6', id: '6', value: '6' },
    { name: '1', id: '1', value: '1' },
    { name: '2', id: '2', value: '2' },
    { name: '3', id: '3', value: '3' },
    { name: '.', id: '.', value: '.' },
    { name: '0', id: '0', value: '0' }
  ]

  constructor(private displayService: DisplayService) { }

  onBtnPress(key: string) {
    var displayContent = this.displayService.getDisplayValue();
    console.log(key);
              if (displayContent === '0') {
                  this.displayService.setDisplayValue(key);
              } else {
                  this.displayService.setDisplayValue(displayContent += key);
              }
  }
}

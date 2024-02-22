import { Component } from '@angular/core';
import { DisplayService } from '../../display.service';

@Component({
  selector: 'app-operation-button',
  templateUrl: './operation-button.component.html',
  styleUrls: ['./operation-button.component.css']
})
export class OperationButtonComponent {
  operationButtons = [
    { name: '+', id: '+', value: '+' },
    { name: '-', id: '-', value: '-' },
    { name: '*', id: '*', value: '*' },
    { name: '/', id: '/', value: '/' },
    { name: '=', id: '=', value: '=' }
  ]

  constructor(private displayService: DisplayService) { }

  onBtnPress(key: string) {
    var displayContent = this.displayService.getDisplayValue();
    if (key === '=') {
      console.log('=');
      this.displayService.setDisplayValue(eval(displayContent));
    }
    else {
      console.log(key)
      this.displayService.setDisplayValue(displayContent += key);
    }
  }

}

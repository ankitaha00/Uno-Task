import { Component } from '@angular/core';
import { DisplayService } from '../../display.service';

@Component({
  selector: 'app-function-button',
  templateUrl: './function-button.component.html',
  styleUrls: ['./function-button.component.css']
})
export class FunctionButtonComponent {
  functionButtons = [
    { name: 'AC', id: 'AC', value: 'AC' },
    { name: '+/-', id: 'pluseminus', value: '+/-' },
    { name: 'C', id: 'C', value: 'C' }
  ]

  constructor(private displayService: DisplayService) { }

  onBtnPress(key: string) {
    var displayContent = this.displayService.getDisplayValue();
    if (key === 'AC') {
      console.log('AC');
      this.displayService.setDisplayValue('0');
    }
    else if (key === '+/-') {
      console.log('+/-')
      this.displayService.setDisplayValue(String(-(Number(displayContent))));
    }
    else if (key === 'C') {
      console.log('C')
      this.displayService.setDisplayValue(displayContent.slice(0, -1));
    }
  }

}





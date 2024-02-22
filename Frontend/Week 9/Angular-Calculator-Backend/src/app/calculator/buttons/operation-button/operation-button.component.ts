import { Component, Input } from '@angular/core';
import { ButtonsComponent } from '../buttons.component';

console.log("Inside Operation Button Component")

@Component({
  selector: 'app-operation-button',
  templateUrl: './operation-button.component.html',
  styleUrls: ['./operation-button.component.css']
})

export class OperationButtonComponent extends ButtonsComponent {
  @Input() override sign: any = '';

  constructor() { super(); }

  handleOperationButtonClick(): void {
    console.log("Inside handleOperationButtonClick()")
    console.log("Operation button '" + this.sign + "' CLICKED");
    this.buttonClick.emit(this.sign)
  }
}


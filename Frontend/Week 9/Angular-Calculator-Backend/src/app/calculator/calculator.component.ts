import { Component, Input, KeyValueDiffers } from '@angular/core';
import { CalculatorModel } from './calculator.model';
import { CalculatorService } from './calculator.service';

console.log('Inside Calculator Component');
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent extends CalculatorModel {

  buttonArray: { sign: string, type: string }[] = [];
  displayContent: string = '';


  //---------
  constructor(private calculatorService: CalculatorService) {
    super();
  }
  //---------
  model = new CalculatorModel();

  funcBtns = this.model.functionButtons;           //receiving {sign, type} from CalculatorModel
  numBtns = this.numericButtons;                   //receiving {sign, type} from CalculatorModel
  oprBtns = this.operationButtons;                 //receiving {sign, type} from CalculatorModel

  // { sign: 'AC', value: 'AC', type: 'FUNCTION' }
  // Handling Function Button CLick
  handleFunctionButtonClick(key: any): void {
    if (key === 'AC') {
      console.log('AC Clicked');
      this.displayContent = '';
    }
    else if (key === '+/-') {
      console.log('+/- Clicked')
      this.setDisplay(String(-(Number(this.displayContent))));
    }
    else if (key === 'C') {
      console.log("C Clicked")
      this.displayContent = String(this.displayContent).slice(0, -1);
    }
  }
  
  // Handling Numeric Button CLick
  handleNumericButtonClick(key: any): void {
    if (key === '0' && this.displayContent !== '0') {
      console.log("0 Clicked");
      this.setDisplay(this.displayContent + key);
    } else if (key !== '0') {
      console.log(key + " Clicked");
      if (this.displayContent === '0') {
        this.setDisplay(key);
      } else {
        this.setDisplay(this.displayContent + key);
      }
    }
  }

  // Handling Operation Button CLick
  handleOperationButtonClick(key: any): void {
    if (key === '=') {
      let handleExpression = this.handleExpression(this.displayContent);
      this.setDisplay(eval(handleExpression));
    }
    else {
      this.setDisplay(this.displayContent + key);
    }
  }

  // Handling Double Operators
  handleExpression(expression: string): string {
    expression = expression.replace(/--/, '+');
    expression = expression.replace(/-+/, '-');
    return expression;
  }

  setDisplay(value: string) {
    this.displayContent = value;
  }

  getDisplay() {
    console.log("display ", this.displayContent);
    return this.displayContent;
  }

  //----------
  // Calculate and send data to the Servlet
  calculate(): void {
    const data = { expression: this.displayContent }; // Modify as per your Servlet's expected format
    this.calculatorService.calculate(data).subscribe(
       //{
      //next: (v) =>console.log(v),
     // error: (e) => console.log(e),
    //}
      response => {
        // Update display or handle response
        console.log('Calculation result:', response.result);
        this.displayContent = response.result; // Example: Update display with calculation result
      },
      error => {
        // Handle error response
        console.error('Error:', error);
      }
    );
  }
  //-----------------
}



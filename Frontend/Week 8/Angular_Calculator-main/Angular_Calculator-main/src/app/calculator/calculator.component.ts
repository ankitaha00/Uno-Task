import { Component } from '@angular/core';
import { CalciServiceService } from '../calciservices/calci-service.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [CalciServiceService]
})
export class CalculatorComponent {


displayValue:any="";

setDisplay(displayValue:any){
  this.displayValue=displayValue;
}
getDisplay(){
 return this.displayValue;
}



}

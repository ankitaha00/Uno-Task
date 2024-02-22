import { Component } from '@angular/core';
import { CalciServiceService } from 'src/app/calciservices/calci-service.service';

@Component({
  selector: 'app-operationalbuttons',
  templateUrl: './operationalbuttons.component.html',
  styleUrls: ['./operationalbuttons.component.css']
})
export class OperationalbuttonsComponent {
   operationalButtons = [{type:"OPERATOR",value:'add',symbol:'+'},{type:"OPERATOR",value:'subtract',symbol:'-'},{type:"OPERATOR",value:'multiply',symbol:'*'},{type:"OPERATOR",value:'divide',symbol:'/'},{type:"OPERATOR",value:'equalsto',symbol:'='},]
  // operationalButtons :string[] = ['+','-','*','/','='];
 // operationalButtons = [{type:"OPERATOR",value:'add'},{type:"OPERATOR",value:'subtract'},{type:"OPERATOR",value:'multiply'},{type:"OPERATOR",value:'divide'},{type:"OPERATOR",value:'equalsto'}]
  constructor(private opBtns:CalciServiceService){}
  onClick(value:any){
   this.opBtns.opBtnClickHandler(value);
   }
}

import { Component,OnInit } from '@angular/core';
import { CalciServiceService } from 'src/app/calciservices/calci-service.service';

@Component({
  selector: 'app-functionalbuttons',
  templateUrl: './functionalbuttons.component.html',
  styleUrls: ['./functionalbuttons.component.css']
})
export class FunctionalbuttonsComponent { 
 functionalButtons : string[] = ['AC','DEL'];

// Setting Event on Functional Buttons
constructor(private fnBtns:CalciServiceService){}
  onClick(val:any){
   this.fnBtns.fnBtnClickHandler(val);
   console.log(val);
   }

}

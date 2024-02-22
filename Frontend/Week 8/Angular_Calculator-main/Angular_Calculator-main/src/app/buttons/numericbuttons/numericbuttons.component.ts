import { Component } from '@angular/core';
import { CalciServiceService } from 'src/app/calciservices/calci-service.service';

@Component({
  selector: 'app-numericbuttons',
  templateUrl: './numericbuttons.component.html',
  styleUrls: ['./numericbuttons.component.css']
})
export class NumericbuttonsComponent {
  numericButtons  = [{type:"NUMBER",value:1},{type:"NUMBER",value:2},{type:"NUMBER",value:3},{type:"NUMBER",value:4},{type:"NUMBER",value:5},{type:"NUMBER",value:6},{type:"NUMBER",value:7},{type:"NUMBER",value:8},{type:"NUMBER",value:9},{type:"NUMBER",value:0}]
  // numericButtons :string[] = ['0','1','2','3','4','5','6','7','8','9'];  
  constructor(private nuBtns:CalciServiceService){}
  onClick(value:any){
   this.nuBtns.numberBtnClickHandler(value);
   }
  }

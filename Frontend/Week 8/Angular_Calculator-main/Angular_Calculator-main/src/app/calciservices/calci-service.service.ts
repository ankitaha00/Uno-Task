import { Injectable } from '@angular/core';
import { CalculatorComponent } from '../calculator/calculator.component';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class CalciServiceService {
  value :any='';
  containerStack:any = [];

  constructor(private calc: CalculatorComponent,private connection : ConfigService){}
  

  numberBtnClickHandler(key:any){
   
    this.value = this.calc.getDisplay();
    this.value+=key.value;
    this.calc.setDisplay(this.value);
    
  }


  opBtnClickHandler(key : any){
  //   this.value= this.calc.getDisplay();
  //   if(key=='+'){
  //     this.value+=key;
  //     this.calc.setDisplay(key.symbol);
  // } else if(key=='-'){
  //   this.value+=key;
  //     this.calc.setDisplay(key.symbol);
  // }else if(key=='*'){
  //   this.value+=key;
  //     this.calc.setDisplay(key.symbol);
  // } else if(key=='/'){
  //   this.value+=key;
  //     this.calc.setDisplay(this.value);
  
  this.pushNumber();
  if(key.value =='equalsto'){
      this.calculate();
  }
  else{
    this.value = this.calc.getDisplay();
    this.value+=key.symbol;
    this.calc.setDisplay(this.value);
    this.containerStack.push(key);
    console.log("After updating optr",this.containerStack);
    
  }
  }


  fnBtnClickHandler(key:string){
    if(key=='AC'){
      this.calc.setDisplay("");
  }else if (key=='DEL'){
      this.calc.setDisplay(this.value.substring(0,this.value.length-1));
  }
  } 
  


  calculate(){
    this.connection.getValuesBackend(this.containerStack).subscribe((response : any) => {
      console.log(response);
      console.log(typeof(response));
      this.calc.setDisplay(response);
      
     });     
  } 
  
  pushNumber(){
      this.value = this.calc.getDisplay();
      this.containerStack.push({type:"NUMBER",value:this.value});
      console.log("Details from pushnumber",);
      console.log("this is new stack",this.containerStack)
      this.value="";
  }


}



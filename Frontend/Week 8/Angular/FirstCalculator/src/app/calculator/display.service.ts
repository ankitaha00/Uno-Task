import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  displayValue = '0';

  getDisplayValue() {
    console.log("Current Value "+this.displayValue)
    return this.displayValue;
  }

  setDisplayValue(value: string) {
    console.log("Updated Value"+value)
    this.displayValue = value;
  }
}

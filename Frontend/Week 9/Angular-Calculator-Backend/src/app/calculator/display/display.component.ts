import { Component, Input } from '@angular/core';

console.log("Inside Dispaly Component ")

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  @Input() displayText : string ='';
}

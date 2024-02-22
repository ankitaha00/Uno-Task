import { Component } from '@angular/core';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  constructor(public displayService: DisplayService) { }

  displayValue = '0';
}

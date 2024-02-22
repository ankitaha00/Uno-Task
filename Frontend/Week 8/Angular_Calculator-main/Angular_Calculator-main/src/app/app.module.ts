import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { DisplayComponent } from './display/display.component';
import { FunctionalbuttonsComponent } from './buttons/functionalbuttons/functionalbuttons.component';
import { OperationalbuttonsComponent } from './buttons/operationalbuttons/operationalbuttons.component';
import { NumericbuttonsComponent } from './buttons/numericbuttons/numericbuttons.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CalciServiceService } from './calciservices/calci-service.service';
import { CalculatorComponent } from './calculator/calculator.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    DisplayComponent,
    FunctionalbuttonsComponent,
    OperationalbuttonsComponent,
    NumericbuttonsComponent,
    CalculatorComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatSlideToggleModule,MatInputModule,
    BrowserAnimationsModule,MatButtonModule,MatIconModule,FormsModule
  ],
  providers: [CalciServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

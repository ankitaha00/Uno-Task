import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ButtonsComponent } from './calculator/buttons/buttons.component';
import { DisplayComponent } from './calculator/display/display.component';
import { FunctionButtonComponent } from './calculator/buttons/function-button/function-button.component';
import { NumericButtonComponent } from './calculator/buttons/numeric-button/numeric-button.component';
import { OperationButtonComponent } from './calculator/buttons/operation-button/operation-button.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ButtonsComponent,
    DisplayComponent,
    FunctionButtonComponent,
    NumericButtonComponent,
    OperationButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

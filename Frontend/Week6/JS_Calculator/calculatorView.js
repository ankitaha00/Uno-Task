/* @param {cal-1} id
@param {parentElement} parentElement
@param {null} options */

function CalculatorView(id, parentElement, options) {
    console.log("Loading CalculatorView");

    this.init = function (id, parentElement, options) {
        console.log(id, parentElement, options);
        this.id = id;
        this.options = options;
        this.parentElement = parentElement;
        this.setCalculatorWidget();
    }


    //setting calculator widget i.e. display container and button container inside calculator container
    this.setCalculatorWidget = function () {

        //creating div for calculator container
        this.calculatorWidget = document.createElement('div');
        this.calculatorWidget.className = "calc-container";

        //creating div for display container
        this.displayContainer = document.createElement('div');
        this.displayContainer.className = "display-container";
        
        //creating div for button container
        this.btnContainer = document.createElement('div');
        this.btnContainer.className = "btn-container";

        //creating div for function button container
        this.functionBtnContainer = document.createElement('div');
        this.functionBtnContainer.className = "funBtn-container";

        //creating div for numeric button container
        this.numericBtnContainer = document.createElement('div');
        this.numericBtnContainer.className = "numBtn-container";

        //creating div for operation button container
        this.operationBtnContainer = document.createElement('div');
        this.operationBtnContainer.className = "oprBtn-container";

        //appending numeric, operation & function buttons to parent button container
        this.btnContainer.appendChild(this.functionBtnContainer);
        this.btnContainer.appendChild(this.operationBtnContainer);
        this.btnContainer.appendChild(this.numericBtnContainer);

        //appending display & button container to the calculator widget (calculator container);
        this.calculatorWidget.appendChild(this.displayContainer);
        this.calculatorWidget.appendChild(this.btnContainer);

        //appeding calculator widget container to the parentElement div (static div in html)
        this.parentElement.appendChild(this.calculatorWidget);
    }

    this.init(id, parentElement, options);

    /* method creating the widget */
    createWidget = function (element, classname) {
        this.element = element;
        this.classname = classname;
        this.widget = document.createElement(this.element);
        this.widget.className = this.classname;
        console.log(this.widget);
    }

    /* method appending the widget */
    appendWidget = function (parentWidget, widget) {
        this.parentWidget = parentWidget;
        this.widget = widget;
        this.parentWidget.appendChild.this.widget;
        console.log(this.parentWidget);
    }

    /* return calculator widget */
    this.getWidget = function () {
        return this.calculatorWidget;
    }

    /* @param {*} displayElement = display widget */
    this.setDisplay = function (displayElement) {
        console.log(displayElement + " Input Element from setDisplay")
        this.displayContainer.appendChild(displayElement);                          //get widget of display (input element) from calculator controller
    }

    /* setting Function buttons to the function button container
    @param {*} FnBtnArray */
    this.setFunctionButtons = function (funcBtnArray) {
        funcBtnArray.forEach(btn => {
            console.log('Function btn--->', btn)
            this.functionBtnContainer.appendChild(btn);
        });
    }

    /* setting Numeric buttons to the numeric button container
        @param {*} NumBtnArray */
    this.setNumericButtons = function (numBtnArray) {
        numBtnArray.forEach(btn => {
            console.log('Numeric btn--->', btn)
            this.numericBtnContainer.appendChild(btn);
        });
    }

    /* setting Operation buttons to the operation button container
        @param {*} NumBtnArray */
    this.setOperationButtons = function (oprBtnArray) {
        oprBtnArray.forEach(btn => {
            console.log('Operation btn--->', btn)
            this.operationBtnContainer.appendChild(btn);
        });
    }

}
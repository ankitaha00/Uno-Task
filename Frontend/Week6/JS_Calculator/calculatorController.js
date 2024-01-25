/*  @param {"cal-1"} id 
 @param {"cals"} elementId 
 @param {null} options 
 */

function Calculator(id, elementId, options) {
    console.log("Loading CalculatorController");

    console.log(id, elementId, options)
    this.init = function (id, elementId, options) {

        //creating calculator model with given id
        this.model = new CalculatorModel(id, options);

        //getting parent Element where calculator code to be generated
        var parentElement = document.getElementById(elementId);                       //cals
        console.log("Element ID --->", elementId);

        // creating calculator view with the given id inside parent element
        this.view = new CalculatorView(id, parentElement, options);

        this.id = id;
        this.options = {
            btnModel: this.model
        }

        //getting widget element from calculator view
        this.widgetElement = this.view.getWidget();                                   //calculatorWidget which will have display container and button container

        //setting widgets
        this.setWidgets(this.options);
    }

    //setting widget for display and buttons
    this.setWidgets = function (options) {
        console.log('Inside setWidget')
        this.options = options;

        /* Display */
        this.display = new Display('display_' + this.id, { className: 'display_class' });
        this.displayElement = this.display.getWidget();                              //get widget of display (input element) from display controller
        console.log('Inside Calculator controller.s setWidget', this.displayElement)
        this.view.setDisplay(this.displayElement);
        // this.display.setDiplay(0);

        /* Function Buttons */
        var funcBtns = this.model.functionBtns;                                     //getting function buttons from calculator model
        console.log('---->', funcBtns)
        console.log('FunctionBtns Lenght --->', this.model.functionBtns.length);
        var funcBtnArray = [];

        for (let i = 0; i < funcBtns.length; i++) {
            console.log('Inside for loop ', i);

            var opt = {
                title: funcBtns[i],
                value: funcBtns[i],
                className: "btn btn-func"
            }

            var funcbtn = new FunctionButton('funcBtn_' + this.id + '_' + funcBtns[i], opt);

            var _this = this;
            funcbtn.onBtnPress = function () {
                _this.functionBtnsClickHandler(funcBtns[i]);
            }

            funcBtnArray.push(funcbtn.getWidget());
        }

        this.view.setFunctionButtons(funcBtnArray);

        /* Numeric Buttons */
        var numBtns = this.model.numericBtns;                                      //getting numeric buttons from calculator model
        console.log('--->', numBtns)
        console.log('NumericBtns Lenght --->', numBtns.length);
        var numBtnArray = [];

        for (let i = 0; i < numBtns.length; i++) {
            console.log('Inside for loop ', i);

            var opt = {
                title: numBtns[i],
                value: numBtns[i],
                className: "btn btn-num",
            }

            var numbtn = new NumericButton('numBtn_' + this.id + '_' + numBtns[i], opt);

            var _this = this;
            numbtn.onBtnPress = function () {
                _this.numericBtnsClickHandler(numBtns[i]);
            }

            numBtnArray.push(numbtn.getWidget());
        }

        this.view.setNumericButtons(numBtnArray);

        /* Operation Buttons */
        var oprBtns = this.model.operationBtns;                                   //getting operation buttons from calculator model
        console.log('--->', oprBtns)
        console.log('OperationBtns Lenght --->', oprBtns.length);
        var oprBtnArray = [];

        for (let i = 0; i < oprBtns.length; i++) {
            console.log('Inside for loop ', i);

            var opt = {
                title: oprBtns[i],
                value: oprBtns[i],
                className: "btn btn-opr"
            }

            var oprbtn = new OperationButton('oprBtn_' + this.id + '_' + oprBtns[i], opt);

            var _this = this;
            oprbtn.onBtnPress = function () {
                _this.operationBtnsClickHandler(oprBtns[i]);
            }

            oprBtnArray.push(oprbtn.getWidget());
        }

        this.view.setOperationButtons(oprBtnArray);

        /* Function Button Click Handler 
            @param {*}key */

        this.functionBtnsClickHandler = function (key) {
            console.log(key);
            var displayContent = this.display.getDisplayValue();
            if (key === 'AC') {
                console.log('AC Pressed')
                this.display.setDisplay(0);
            }
            else if (key === '+/-') {
                console.log('+/- Pressed')
                this.display.setDisplay(-(displayContent));
            }
            else if (key === 'C') {
                console.log('C Pressed')
                this.display.setDisplay(displayContent.slice(0, -1));
            }
        }

        /* Numeric Button Click Handler 
            @param {*}key */

        this.numericBtnsClickHandler = function (key) {
            console.log(key);
            var displayContent = this.display.getDisplayValue();
            if (key === '1') {
                console.log('1 Pressed')
                this.display.setDisplay(displayContent += 1);
            }
            else if (key === '2') {
                console.log('2 Pressed')
                this.display.setDisplay(displayContent += 2);
            }
            else if (key === '3') {
                console.log('3 Pressed')
                this.display.setDisplay(displayContent += 3);
            }
            else if (key === '4') {
                console.log('4 Pressed')
                this.display.setDisplay(displayContent += 4);
            }
            else if (key === '5') {
                console.log('5 Pressed')
                this.display.setDisplay(displayContent += 5);
            }
            else if (key === '6') {
                console.log('6 Pressed')
                this.display.setDisplay(displayContent += 6);
            }
            else if (key === '7') {
                console.log('7 Pressed')
                this.display.setDisplay(displayContent += 7);
            }
            else if (key === '8') {
                console.log('8 Pressed')
                this.display.setDisplay(displayContent += 8);
            }
            else if (key === '9') {
                console.log('9 Pressed')
                this.display.setDisplay(displayContent += 9);
            }
            else if (key === '0') {
                console.log('0 Pressed')
                this.display.setDisplay(displayContent += 0);
            }
            else if (key === '.') {
                console.log('. Pressed')
                this.display.setDisplay(displayContent += ".");
            }
        }

        /* Operation Button Click Handler 
            @param {*}key */

        this.operationBtnsClickHandler = function (key) {
            console.log(key);
            var displayContent = this.display.getDisplayValue();
            if (key === '=') {
                console.log('= Pressed')
                this.display.setDisplay(eval(displayContent));
            }
            else {
                this.display.setDisplay(displayContent + key);
            }
        }

    }
    this.init(id, elementId, options)

}
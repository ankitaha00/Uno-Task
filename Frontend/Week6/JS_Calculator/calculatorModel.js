function CalculatorModel(id, options) {
    console.log("Loading CalculatorModel");

    this.init = function (id, options) {
        this.id = id;
        this.numericBtns = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0'];
        this.operationBtns = ['+', '-', '*', '/', '='];
        this.functionBtns = ['AC', '+/-', 'C'];
        this.options = options;
    }

    this.init(id, options);
}
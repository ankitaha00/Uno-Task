function ButtonController(model) {
    console.log('Inside Button Controller');
    console.log(model.funcBtn); 
    console.log(model.numBtn); 
    console.log(model.oprBtn); 

    var funcmodel = model.funB;
    var nummodel = model.operBtn;
    var oprmodel = model.operBtn;

    var functionButton = new FunctionController(model.funcBtn);
    var numericButton = new NumericController(model.numBtn);
    var operationButton = new OperationController(model.oprBtn);

}

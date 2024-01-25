function CalculatorController(id){
    
        var calcmodel = new CalculatorModel();
        // var funBtns = calcmodel.funcBtn;
        var calcview = new CalculatorView(id);
        var display = new DisplayController();
        var button = new ButtonController(calcmodel);

}


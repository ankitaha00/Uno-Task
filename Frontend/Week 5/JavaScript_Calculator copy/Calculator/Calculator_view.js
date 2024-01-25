function calculatorView(id) {
    var calculatorContainer = document.getElementById(id);
    calculatorContainer.id = 'calculatorContainer';

    var buttonContainer = document.createElement('div');
    buttonContainer.id = 'buttonContainer';

    var displayContainer = document.createElement('div');
    displayContainer.id = 'displayContainer';

    var funcButtonContainer = FunctionController();
    var oprButtonContainer = OperationController();
    var numButtonContainer = NumericController();

    buttonContainer.appendChild(funcButtonContainer);
    buttonContainer.appendChild(oprButtonContainer);
    buttonContainer.appendChild(numButtonContainer);

    calculatorContainer.appendChild(buttonContainer);
    calculatorContainer.appendChild(displayContainer);

    var body = document.getElementsByTagName('BODY')[0];
    body.appendChild(calculatorContainer);

    console.log('Calculator View Created');
    return calculatorContainer.id;
}





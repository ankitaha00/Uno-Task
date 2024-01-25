function functionView(model) {
    console.log('Inside FunctionButton_view');
    var calculatorContainer = document.getElementById('calculatorContainer');
 
    var funcButtonContainer = document.createElement('div');
    funcButtonContainer.id = 'funcButtonContainer';
 
    calculatorContainer.appendChild(funcButtonContainer);
 
    var funcModel = model.functionModel;
    for (let i = 0; i < funcModel.length; i++) {
       var button = document.createElement('button');
       button.textContent = funcModel[i];
       button.value = funcModel[i];
       button.id = funcModel[i];
       button.classList.add('func-btn');
 
       funcButtonContainer.appendChild(button);
    }
 
    console.log('Function Button Created');
    return funcButtonContainer;
}





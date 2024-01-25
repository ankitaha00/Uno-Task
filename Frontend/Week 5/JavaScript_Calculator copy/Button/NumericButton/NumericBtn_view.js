function numericView(model) {
    console.log('Inside NumeriButton_View');

    var numButtonContainer = document.createElement('div');
    numButtonContainer.id = "numButtonContainer";
    
    var buttonContainer = document.getElementById('buttonContainer');
    buttonContainer.appendChild(numButtonContainer);
    
    var numModel = model.numericModel;
    for( let i = 0; i < numModel.length; i++){
        var button = document.createElement('button');
        button.textContent = numModel[i];
        button.value = numModel[i];
        button.id = numModel[i];
        button.classList.add('num-btn');
        // button.onclick = console.log(numModel[i]);
        // button[i].addEventListener(click, function(){
        //     console.log(button.value=numModel[i]);
        // });

        numButtonContainer.appendChild(button);
    }
    console.log("Numeric Button Created");
    return numButtonContainer;
}
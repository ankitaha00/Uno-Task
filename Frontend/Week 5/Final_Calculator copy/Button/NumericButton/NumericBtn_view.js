function numericView(model) {
    console.log('Inside NumeriButton_View');

    var numButtonContainer = document.getElementById('numButtonContainer');
    
    // var numModel = numericModel();
    for( let i = 0; i < model.length; i++){
        var button = document.createElement('button');
        button.textContent = model[i];
        button.value = model[i];
        button.id = 'btn' + model[i];
        button.classList.add('num-btn');
        // button.onclick = console.log(model[i]);
        // button[i].addEventListener(click, function(){
        //     console.log(button.value=model[i]);
        // });

        numButtonContainer.appendChild(button);
    }
    console.log("Numeric Button Created");
}
// numericView();
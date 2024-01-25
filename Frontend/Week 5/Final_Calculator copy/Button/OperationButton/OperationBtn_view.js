function operationView(model) {
    console.log('Inside OperationView_View');

    var oprButtonContainer = document.getElementById('oprButtonContainer');
   
    // var oprModel =operationModel();
    for( let i = 0; i < model.length; i++){
        var button = document.createElement('button');
        button.textContent = model[i];
        button.value = model[i];
        button.id = 'btn' +  model[i];
        button.classList.add('opr-btn');
        // button.addEventListener(click, function(){
        //     console.log(button.value(model[i]));
        // });

        oprButtonContainer.appendChild(button);
    }
    console.log("Operation Button Created");
}
// operationView();
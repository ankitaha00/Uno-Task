function operationView(model) {
    console.log('Inside OperationView_View');

    var oprButtonContainer = document.createElement('div');
    oprButtonContainer.id = "oprButtonContainer";
    // var parentdiv = document.getElementsByTagName('BODY')[0];
    // parentdiv.appendChild(oprButtonContainer);
    var buttonContainer = document.getElementById('buttonContainer');
    buttonContainer.appendChild(oprButtonContainer);
    
    var oprModel = model.operationModel;
    for( let i = 0; i < oprModel.length; i++){
        var button = document.createElement('button');
        button.textContent = oprModel[i];
        button.value = oprModel[i];
        button.id = oprModel[i];
        button.classList.add('opr-btn');
        // button.addEventListener(click, function(){
        //     console.log(button.value(oprModel[i]));
        // });

        oprButtonContainer.appendChild(button);
    }
    console.log("Operation Button Created");
    return oprButtonContainer;
}
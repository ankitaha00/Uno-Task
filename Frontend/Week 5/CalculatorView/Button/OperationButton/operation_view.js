function OperationButtonView(model){

    var parentElement=document.getElementById("operation")

    var operationButtonModel=model.functionModel


    for(let i=0;i<operationButtonModel.length;i++){
        var operationButton=document.createElement("button")
        operationButton.textContent=operationButtonModel[i]
        parentElement.append(functionButton)
    }
}
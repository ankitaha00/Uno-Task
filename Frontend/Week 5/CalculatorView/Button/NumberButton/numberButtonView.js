function numberBtnView(model){

    var parentElement=document.getElementById("number")

    var numberBtnModel=model.functionModel


    for(let i=0;i<numberBtnModel.length;i++){
        var numberBtn=document.createElement("button")
        numberBtn.textContent=numberBtnModel[i]
        parentElement.append(numberBtn)
    }
}
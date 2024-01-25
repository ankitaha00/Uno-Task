function functionBtnView(model){

    var parentElement=document.getElementById("function");

    for(let i=0;i<model.length;i++){
        var functionBtn=document.createElement("button");
        functionBtn.textContent=model[i];
        parentElement.append(functionBtn);
    }
}
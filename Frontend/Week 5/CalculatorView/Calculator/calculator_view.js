function calculatorView(id){
    
        var calculatorParentElement=document.getElementById(id)
        
        var displayParentElement=document.createElement("div")
        displayParentElement.setAttribute("id","display")

        var buttonParentElement=document.createElement("div")
        buttonParentElement.setAttribute("id","button")

        var functionButton=document.createElement("div")
        functionButton.setAttribute("id","function")

        var operationButton=document.createElement("div")
        operationButton.setAttribute("id","function")

        var numberButton=document.createElement("div")
        numberButton.setAttribute("id","function")

        buttonParentElement.append(functionButton)
        buttonParentElement.append(operationButton)
        buttonParentElement.append(numberButton)

        calculatorParentElement.append(displayParentElement)
        calculatorParentElement.append(buttonParentElement)


}
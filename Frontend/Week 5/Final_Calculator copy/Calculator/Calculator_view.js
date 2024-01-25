function CalculatorView(id){
      
    var calculatorContainer = document.getElementById(id);
    calculatorContainer.id = "calculatorContainer";


    var displayContainer = document.createElement("div");
    displayContainer.id = "displayContainer";
   

    var buttonContainer = document.createElement("div");
    buttonContainer.id = "buttonContainer";
  

    calculatorContainer.appendChild(displayContainer);
    calculatorContainer.appendChild(buttonContainer);

    var funcButtonContainer = document.createElement("div");
    funcButtonContainer.id = 'funcButtonContainer';
    var numButtonContainer = document.createElement("div");
    numButtonContainer.id = 'numButtonContainer';
    var oprButtonContainer=document.createElement("div");
    oprButtonContainer.id = 'oprButtonContainer';

    buttonContainer.appendChild(funcButtonContainer);
    buttonContainer.appendChild(numButtonContainer);
    buttonContainer.appendChild(oprButtonContainer);


}
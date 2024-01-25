function createButtons() {
  var buttonContainer = document.createElement("div");
  buttonContainer.id = "buttonContainer";

  var label = ['AC', '+/-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=', "C"];

      for (let i = 0; i < label.length; i++) {
        var button = document.createElement('button');
        button.textContent = label[i];
        button.value = label[i];
        button.id = 'btn-' + label[i];
        button.classList.add('calculator-btn');
         
        button.addEventListener('click', function() {
          display(label[i]);
          console.log( label[i] + ' clicked');  
        });
        
        buttonContainer.appendChild(button);
      }

      console.log('Buttons Created');
      
      return buttonContainer;
}

function display(val) { 
  var display = document.getElementById("displayContainer");

  if (val === "=") {
      display.value = eval(display.value);
  } else if (val === "AC") {
      display.value = "0";
  } else if (val === "C") {  
    display.value = display.value.slice(0, -1);
  } else if (val === "+/-") {
    display.value = -(display.value);
  } else {
      display.value += val;
  }
} 

// // Making it Global
window.createButtons = createButtons;



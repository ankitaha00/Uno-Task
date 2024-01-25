function createButtons() {
  var buttonContainer = document.createElement("div");
  buttonContainer.id = "buttonContainer";
  document.body.appendChild(buttonContainer);

  var label = ['AC', '+/-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=', 'C'];

  for (let i = 0; i < label.length; i++) {
    var button = document.createElement('button');
    button.textContent = label[i];
    button.value = label[i];
    button.id = label[i];
    button.classList.add('calculator-btn');

    button.addEventListener('click', function() {
      console.log(button.value=label[i]);
    });

    buttonContainer.appendChild(button);
  }

  console.log('Buttons Created');

  return buttonContainer;
}

// Making it Global
window.createButtons = createButtons;

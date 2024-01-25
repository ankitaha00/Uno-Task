    function outterContainer() {
      var outterContainer = document.createElement("div");
      outterContainer.id = "outterContainer";
  
      // Call the global functions to get the containers
      var buttonContainer = window.createButtons();
      var displayContainer = window.createDisplay();
  
      // Append button and display containers to the outter container
      outterContainer.appendChild(displayContainer);
      outterContainer.appendChild(buttonContainer);
  
      // Append outter container to the body
      document.body.appendChild(outterContainer);
    }
  
    outterContainer();
 


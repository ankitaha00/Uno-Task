function displayView() {

    var displayContainer = document.createElement("input");
    displayContainer.id = "displayContainer";
    displayContainer.readOnly = true;
    displayContainer.placeholder = "0";
    
    var parentDiv = document.getElementsByTagName('BODY')[0];
    parentDiv.appendChild(displayContainer);

    
    console.log("Display Created");
   
    return displayContainer.id;
  }
  
//   function updateDisplay(value) {
//     var displayContainer = document.getElementById('displayContainer');
//     displayContainer.value = value;
//   }
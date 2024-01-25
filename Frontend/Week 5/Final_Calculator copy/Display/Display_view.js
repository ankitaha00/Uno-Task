function displayView() {
    console.log('Inside Display_view');

    
    var displayContainer = document.getElementById('displayContainer');

    var input = document.createElement("input");
    input.id = 'displayinput';
    input.readOnly = true;
    input.placeholder = "0";

    displayContainer.appendChild(input);
   
    console.log("Display Created");
  }
//   displayView();
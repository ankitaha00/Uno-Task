function createDisplay() {
  var displayContainer = document.createElement("input");
  displayContainer.id = "displayContainer";
  document.body.appendChild(displayContainer);
  displayContainer.readOnly = true;
  displayContainer.value = '0';
  console.log("Display Created");
  
  return displayContainer;
}

// Making it Global
window.createDisplay = createDisplay;

  
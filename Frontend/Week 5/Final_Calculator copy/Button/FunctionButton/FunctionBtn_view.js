function functionView(model) {
    console.log('Inside FunctionButton_view');

    var funcButtonContainer = document.getElementById('funcButtonContainer');

    for (let i = 0; i < model.length; i++) {
        var button = document.createElement("button");
        button.textContent = model[i];
        button.value = model[i];
        button.id = 'btn' + model[i];
        button.classList.add('func-btn');
        // button.addEventListener(click, function () {
        //     console.log(button.value(model[i]));
        // });

        funcButtonContainer.appendChild(button);
    }
    console.log("Function Button Created");
}
// functionView();
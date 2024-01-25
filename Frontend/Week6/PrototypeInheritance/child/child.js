function Child() {
    
    // Parent.call(this);
    printChild();
    console.log('Child printed');
}

function printChild() {
    console.log('Printing from Child');
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

// FunctionButton.prototype = Object.create(Button.prototype);
// FunctionButton.prototype.constructor = FunctionButton;

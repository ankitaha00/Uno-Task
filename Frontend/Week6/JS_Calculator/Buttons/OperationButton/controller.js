/* * @param {*} id 
* @param {'opBtn_' + this.id + '_' + opBtns[i],{title: opBtns[i], value: opBtns[i], className: "btn btn-danger function",width : '100px'} }options 
 */

var OperationButton = function(id, options){
    console.log("Loading OperationController");

    this.init = function(id, options){
        this.model = new OperationButtonModel();
        this.view = new OperationButtonView(id, this.model, options);
    }

    this.onBtnPress = function(event){
        console.log('Inside onBtnPress function in operation controller');
    }

    Button.call(this, id, options);
}

OperationButton.prototype = Object.create(Button.prototype);
OperationButton.prototype.constructor = OperationButton;  


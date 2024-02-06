/* * @param {*} id 
* @param {'fnBtn_' + this.id + '_' + fnBtns[i],{title: fnBtns[i], value: fnBtns[i], className: "btn btn-danger function",width : '100px'} }options 
 */

var FunctionButton = function (id, options) {
    console.log("Loading FunctionController");

    this.init = function (id, options) {
        console.log('Inside init of Function Button Controller');

        this.model = new FunctionButtonModel();
        this.view = new FunctionButtonView(id, this.model, options);
    }

    this.onBtnPress = function (event) {
        console.log('Inside onBtnPress function in function controller');
    }

    Button.call(this, id, options);
}

FunctionButton.prototype = Object.create(Button.prototype);
FunctionButton.prototype.constructor = FunctionButton;



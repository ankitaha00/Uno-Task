/* * @param {*} id 
* @param {'numBtn_' + this.id + '_' + numBtns[i],{title: numBtns[i], value: numBtns[i], className: "btn btn-danger function",width : '100px'} }options 
 */

var NumericButton = function (id, options) {
    console.log("Loading NumericController");

    this.init = function (id, options) {
        console.log('Inside init of Numeric Button Controller');

        this.model = new NumericButtonModel();
        this.view = new NumericButtonView(id, this.model, options);
    }

    this.onBtnPress = function (event) {
        console.log('Inside onBtnPress function in numeric controller');
    }

    Button.call(this, id, options);
}

NumericButton.prototype = Object.create(Button.prototype);
NumericButton.prototype.constructor = NumericButton;


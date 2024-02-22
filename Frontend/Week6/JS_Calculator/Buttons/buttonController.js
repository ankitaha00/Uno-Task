/* @param{'fnBtn_' + this.id + '_' + fnBtns[i]} id for function buttons
@param{{title: , value: fnBtns[i], className: "btn-(either func/num/opr)"}}
options for function buttons */

function Button(id, options) {
  console.log("Loading ButtonModel");

  this._init = function (id, options) {
    console.log('Inside _init of Button Controller');

    this.id = id;
    this.options = options;
    this.init(id, options);                                //this will call the overriden init method which is in function button controller init
    this.setEvent();

    console.log('Id--->', this.id)
  }

  this.setEvent = function () {
    var _this = this;
    console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$', _this)
    this.getWidget().onclick = function (event) {
      _this.onBtnPress(event)
    }
  }

  this._init(id, options);
}

Button.prototype.init = function (id, options) {            //this method is overridden, so not executed
  console.log('Inside prototype init of Button Controller');
  
  this.model = new ButtonModel();
  this.view = new ButtonView(id, this.model, options);
}

Button.prototype.getWidget = function () {
  return this.view.getWidgetElement();
}

Button.prototype.onBtnPress = function (event) {

}


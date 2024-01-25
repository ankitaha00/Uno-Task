/* @param {*} id 
@param {'numBtn_' + this.id + '_' + numBtns[i],{title: numBtns[i], value: numBtns[i], className: "btn btn-danger function",width : '100px'}} options 
 */

var NumericButtonView = function (id, model, options) {
   console.log("Loading NumericButtonView");

   this.init = function (id, model, options) {
      this.model = model;
      this.setWidget();
   }

   this.setWidget = function () {
      this.widgetElement.style.background = this.model.color;
   }

   ButtonView.call(this, id, model, options);
}

NumericButtonView.prototype = Object.create(ButtonView.prototype);
NumericButtonView.prototype.constructor = NumericButtonView;





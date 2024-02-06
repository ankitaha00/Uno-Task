/* @param {*} id 
@param {'fnBtn_' + this.id + '_' + fnBtns[i],{title: fnBtns[i], value: fnBtns[i], className: "btn btn-danger function",width : '100px'}} options 
 */

var FunctionButtonView = function (id, model, options) {
   console.log("Loading FunctionButtonView");

   this.init = function (id, model, options) {
      console.log('Inside init of Function Button View');

      this.model = model;
      this.setWidget();
   }

   this.setWidget = function () {
      this.widgetElement.style.background = this.model.color;
   }

   ButtonView.call(this, id, model, options);
}

FunctionButtonView.prototype = Object.create(ButtonView.prototype);
FunctionButtonView.prototype.constructor = FunctionButtonView;





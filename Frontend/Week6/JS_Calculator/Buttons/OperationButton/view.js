/* @param {*} id 
@param {'fnBtn_' + this.id + '_' + fnBtns[i],{title: fnBtns[i], value: fnBtns[i], className: "btn btn-danger function",width : '100px'}} options 
 */

var OperationButtonView = function(id, model, options) {
   console.log("Loading OperationButtonView");

   this.init = function(id, model, options){
      console.log('Inside init of Operation Button View');

      this.model = model;
      this.setWidget();     
   }

   this.setWidget = function(){
      this.widgetElement.style.background = this.model.color;
   }

   ButtonView.call(this, id, model, options);    
}

OperationButtonView.prototype = Object.create(ButtonView.prototype);
OperationButtonView.prototype.constructor = OperationButtonView;





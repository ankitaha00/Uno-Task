/*  @param {'fnBtn_' + this.id + '_' + fnBtns[i]} id   in case of functional buttons
 @param {{ title: fnBtns[i], value: fnBtns[i] ,className: "btn btn-danger function" }} options  in case of functional buttons
 */

var ButtonView = function (id, model, options) {
   this._init = function (id, model, options) {
      this.id = id;
      this.options = options;
      this.widgetElement = null;
      this._setWidget();
      this.init(id, model, options);                                                    //calling overriden init method which is in child button view
   }

   /* creation functional button in html */
   this._setWidget = function () {

      this.widgetElement = document.createElement('button');                           //creating button element
      this.widgetElement.innerHTML = this.options.title;                               //setting inner html
      this.widgetElement.setAttribute('id', this.id);                                  //setting id
      this.widgetElement.setAttribute('class', this.options.className);                //setting class
   }

   /*  */
   this.distroy = function () {

   }

   /* @returnd functional button widget - html element */
   this.getWidgetElement = function () {
      return this.widgetElement;
   }

   this._init(id, model, options);
}

ButtonView.prototype.init = function (id, model, options) {
   console.log('Inside buttonview', id, model, options)
}
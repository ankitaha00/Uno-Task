/* @param {*} id = 'diplay_' + this.id
    @param {*} options = {className : "display_class"} */

    function Display(id, options){
        console.log("Loading DisplayController");

        this.init = function(id, options){
            this.model = new DisplayModel(id, options);    //getting display model
            this.view = new DisplayView(id, options);      //getting display view & setting widget simultaneously
            this.id = id;
            this.options = options;
            this.widgetElement = this.view.getWidget()     //get widget of display (input element) from display view
            }
            
/* @returns display widget */
            this.getWidget = function(){
                return this.widgetElement;                  //get widget of display (input element) from init
            }

/* @return */
            this.getDisplayValue = function(){
                // console.log('Inside getDisplayValue')
                return this.widgetElement.value;
            }

/* @param {0} val */
            this.setDisplay = function(val){
                // console.log('Inside setDisplay')
                this.widgetElement.value = val;
            }
            
            this.init(id, options);
    }
/* @param {*} id = 'display_' + this.id 
   @param {*} options = className: "dispaly_class" */

   function DisplayModel(id, options){
    console.log("Loading DisplayModel");
        this.init = function(id, options){
            this.id = id;
            this.options = options;
        }
        this.init(id, options);
   }
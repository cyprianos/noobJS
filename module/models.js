(function(App) {
    /**TOOO**/
    App.Event = function(params) {
        var event;
        if(document.createEvent) {
            event = document.createEvent("HTMLEvents");
            event.initEvent(params.name,true, true);
        } else {
            event = document.createEventObject();
            event.eventType = params.name;
        }
    };

    App.Model = function(params, options) {
        this.attr = [];
        for (var param in params) {
            if(params.hasOwnProperty(param)) {
                this.attr.push(param);
            }
        }
        console.log(this.attr);
    };

    App.Model.prototype.set = function(key, value){
        this.attr[key] = value;
    };

    App.Model.prototype.get = function(key){
        return this.attr['key'];
    };

    App.Store = function() {
//        this.model
        this.models = [];
    };

    App.Store.prototype.add = function() {
//        return this.model
    };

    App.Store.prototype.load = function() {
        //xhr
    };

    App.View = function() {

    };
    //App.models.Member = new App,models.Model();


})(App);
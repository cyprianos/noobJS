var App = {};

var Loader = function() {
    var cache = {};

    function afterLoad(module, script) {

        cache[module] = {
            el: script
        }
    };

    function load(module, callback) {
        if(!cache[module]) {

            var script = document.createElement('script');
            script.type = 'text/javascript';

            if(script.readyState) {
                script.onreadystatechange = function() {
                    if(script.readyState === "loaded" || script.readyState === "completed") {
                        script.onreadystatechange = null;
                        if(callback) {
                            console.log('callback IE');
                            afterLoad(module, script);
                            callback();
                        }
                    }
                };
            } else {
                script.onload = function() {
                    if(callback) {
                        console.log('callback normal browser');
                        afterLoad(module, script);
                        callback();
                    }
                };
            }

            script.src = module;
            document.getElementsByTagName("head")[0].appendChild(script);
        }
    }

    function dependencies(arr, callback) {
        for(var i=0; i< arr.length; i++) {
            load(arr[i], callback);
        }
    }

    return {
        load: load,
        cache: cache,
        dependencies: dependencies
    };
}();

Loader.load('app.js');
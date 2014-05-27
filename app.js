(function(App, Loader) {
    console.log('app');

    window.addEventListener('click', function(event) {
        console.log('clickevent', event);
        if(event.target.classList.contains('link')) {
            event.preventDefault();
            var state = {
                data: {
                    a:1,
                    b:2
                },
                title: 'my new state',
                url: event.target.href
            }

            history.pushState(state.data, state.title, state.url);
        }
    });

    window.addEventListener('load',function(event) {
//        console.log(Loader.cache);
//        App.controlers = {};
//        App.models = {};
//        App.views = {};
        Loader.dependencies([
            'module/models.js',
            'module/views.js',
            'module/routes.js'
        ], function() {
            console.log(App);
        });

    });


}(App, Loader));


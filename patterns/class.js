(function(App) {
    App.models.Car = function Car(model, year, miles) {
        this.model = model;
        this.year = year;
        this.miles = miles;
        this.year = 2012;
    };

    Car.prototype.toString = function() {
        return this.model + "has done" + this.miles + "miles";
    }

    console.log(App);

    var car = new App.views.Car('dupa');
    car.year = 2010;
    console.log(car);
})(App);

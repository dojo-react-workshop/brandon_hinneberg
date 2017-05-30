'use strict';

// This function will build and return an object for us
function Vehicle(name, numOfWheels, numOfPassengers, speed = 0) {
    this.name = name;
    this.numOfWheels = numOfWheels;
    this.numOfPassengers = numOfPassengers;
    this.speed = speed;
    this.distance_travelled = 0;
}


// Where do prototypes live? -> 
Vehicle.prototype.updateDistanceTraveled = function() {
    this.distance_travelled += this.speed;
    console.log(this.distance_travelled);
}

Vehicle.prototype.makeNoise = function() {
    console.log("zoom zoom");
}

Vehicle.prototype.accelerate = function() {
    this.speed++;
    console.log(this.speed);
}

Vehicle.prototype.move = function() {
    this.makeNoise();
    this.updateDistanceTravelled();
}


// Any time you create an object literal you then have an extention to the default Obj prototypes --> Although you can not have this by using object.create
const v1 = new Vehicle('sedan', 4, 2, 50);
const v2 = new Vehicle('big rig', 16, 3, 32);
const v3 = new Vehicle('school bus', 24, 5, 43);

v1.accelerate();

v1.updateDistanceTravelled();

v1.makeNoise();
// -----------
v2.accelerate();

v2.updateDistanceTravelled();

v2.makeNoise();




// Creating a closure -> when a fjnction remebers a variable after a function has been executed 
const VehicleConstructor = (function() {
    const vehiclePrototype = {
        accelerate: function(velChg = 1) {
            this.speed += velChg;
            return this.speed;
        }
    }
    return function VehicleConstructor(name, numWheels, numPass, speed = 0) {
        const vehicle = Object.create(vehicleProtype);
        vehicle.name = name;
        vehicle.speed = speed;

        return vehicle;
    }
})();
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getId(id) {
    if (!id) {
        return "Id not found!";
    }
    return id;
}
console.log(getId(null));
console.log(getId("287283782732abcde"));
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                var s = strs_1[_i];
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
printAll("John Doe");
printAll(["John", "Doe"]);
console.log("\n");
function calculateArea(shape) {
    if ("size" in shape) {
        return shape.size * shape.size;
    }
    else {
        return shape.width * shape.height;
    }
}
var square = { kind: "square", size: 5 };
var rectangle = { kind: "rectangle", width: 6, height: 4 };
console.log(calculateArea(square));
console.log(calculateArea(rectangle));
console.log("\n");
//'instanceof' operator
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving a car.");
    };
    return Car;
}());
var Bicycle = /** @class */ (function () {
    function Bicycle() {
    }
    Bicycle.prototype.ride = function () {
        console.log("Riding the bicycle.");
    };
    return Bicycle;
}());
function move(vehicle) {
    if (vehicle instanceof Car) {
        vehicle.drive();
    }
    else if (vehicle instanceof Bicycle) {
        vehicle.ride();
    }
    else {
        console.log("Unknown vehicle type.");
    }
}
var car = new Car();
var bicyle = new Bicycle();
move(car);
move(bicyle);
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
logValue("Sunday, 25th Dec");
logValue(new Date());
console.log("\n");
function isFish(pet) {
    return pet.swim !== undefined;
}
function feedPet(pet) {
    if (isFish(pet)) {
        pet.swim();
        console.log("Fish food");
    }
    else {
        pet.fly();
        console.log("Bird food");
    }
}
var myFish = { swim: function () { return console.log("Fish is swimming"); } };
var myBird = { fly: function () { return console.log("Bird is flying"); } };
feedPet(myFish);
feedPet(myBird);
console.log("\n");
function getShape(shape) {
    if (shape.kind === "circle") {
        return "Circle";
    }
    return "Square";
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return shape.side * shape.side;
        default:
            var _defaultShape = shape;
            return _defaultShape;
    }
}
var circle = {
    kind: "circle",
    radius: 2,
};
var square2 = {
    kind: "square",
    side: 5,
};
console.log(getShape(circle));
console.log(getShape(square2));
console.log(Number(getArea(circle).toFixed(2)));
console.log(Number(getArea(square2).toFixed(2)));

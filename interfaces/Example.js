"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//rect1 adheres to interface rectangle.
var rect1 = {
    height: 1.5,
    width: 2.5,
};
console.log(rect1);
var rect2 = {
    height: 2,
    width: 4,
    area: function () {
        return this.height * this.width;
    },
};
var areaOfRectangle = rect2.area ? rect2.area() : "Area cannot be computed";
console.log(areaOfRectangle);
var coloredRect = {
    height: 2.5,
    width: 4.5,
    color: "green",
};
console.log(coloredRect);
var MyObj = { prop1: 1, prop2: "1" }; // Valid
console.log(MyObj);

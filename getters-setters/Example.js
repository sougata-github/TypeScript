"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle = /** @class */ (function () {
    function Rectangle(height, width) {
        this.color = "";
        this.height = height;
        this.width = width;
    }
    Object.defineProperty(Rectangle.prototype, "area", {
        get: function () {
            return Number((this.height * this.width).toFixed(2));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "rectColor", {
        get: function () {
            return this.color;
        },
        set: function (color) {
            if (color === "black" || color === "white") {
                throw new Error("Color not valid.");
            }
            this.color = color;
        },
        enumerable: false,
        configurable: true
    });
    return Rectangle;
}());
var rectangle = new Rectangle(2.2, 4.2);
rectangle.rectColor = "green";
console.log("Area: " + rectangle.area + ".");
console.log("Color: " + rectangle.rectColor + ".");
console.log(rectangle);

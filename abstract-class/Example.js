"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(type) {
        this.type = type;
    }
    Animal.prototype.animalType = function () {
        console.log("".concat(this.type, "."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(type, breed) {
        var _this = _super.call(this, type) || this;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.animalSound = function () {
        return "Woof! Woof!";
    };
    return Dog;
}(Animal));
var dog = new Dog("Mammal", "Husky");
var dogSound = dog.animalSound();
dog.animalType();
console.log(dog);
console.log(dogSound);

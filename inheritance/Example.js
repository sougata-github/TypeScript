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
var Family = /** @class */ (function () {
    function Family(name) {
        this.name = name;
    }
    Family.prototype.setAccess = function () {
        if (this.role === "parent") {
            this.access = true;
        }
        else {
            this.access = false;
        }
    };
    Family.prototype.family = function () {
        console.log("I belong to this family.");
    };
    return Family;
}());
var Parent = /** @class */ (function (_super) {
    __extends(Parent, _super);
    function Parent(name) {
        var _this = _super.call(this, name) || this;
        _this.role = "parent"; //"role" from Family class. (couldn't have accessed if it was private)
        _this.setAccess();
        return _this;
    }
    Parent.prototype.family = function () {
        _super.prototype.family.call(this);
        console.log("I am a Parent and I have access.");
    };
    return Parent;
}(Family));
var parent1 = new Parent("John");
parent1.family();
console.log(parent1, "\n");
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name) {
        var _this = _super.call(this, name) || this;
        _this.role = "child";
        _this.setAccess();
        return _this;
    }
    Child.prototype.family = function () {
        _super.prototype.family.call(this);
        console.log("I am a Child and I don't have access.");
    };
    return Child;
}(Family));
var child1 = new Child("Doe");
child1.family();
console.log(child1, "\n");

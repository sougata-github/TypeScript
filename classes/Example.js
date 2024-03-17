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
var Point = /** @class */ (function () {
    function Point() {
        this.x = 0;
        this.y = 0;
    }
    return Point;
}());
var pt = new Point();
console.log(pt);
var User = /** @class */ (function () {
    function User(email, name, age, password) {
        if (name === void 0) { name = "Username"; }
        this.role = "GUEST";
        this.email = email;
        this.name = name;
        this.age = age;
        this.password = password;
    }
    return User;
}());
var user1 = new User("test@gmail.com", "John Doe", 22, "12345");
console.log(user1);
//inheritance and "protected keyword"
var Parent = /** @class */ (function () {
    function Parent() {
        this.role = "parent";
    }
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.role = "child";
        return _this;
    }
    return Child;
}(Parent));
var child = new Child();
child.name = "John";
console.log(child);
var Instagram = /** @class */ (function () {
    function Instagram(photoMode, filter) {
        this.photoMode = photoMode;
        this.filter = filter;
    }
    return Instagram;
}());
var instaPhoto = new Instagram("Manual mode", "B/W");
console.log(instaPhoto);

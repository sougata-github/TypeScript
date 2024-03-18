"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point() {
        this.x = 0;
        this.y = 0;
    }
    return Point;
}());
var pt = new Point();
console.log(pt, "\n");
var User = /** @class */ (function () {
    function User(email, name, age) {
        if (name === void 0) { name = "Username"; }
        this.role = "GUEST";
        this.email = email;
        this.name = name;
        this.age = age;
    }
    return User;
}());
var user1 = new User("test@gmail.com", "John Doe", 22);
console.log(user1, "\n");
var Instagram = /** @class */ (function () {
    function Instagram(photoMode, filter) {
        this.photoMode = photoMode;
        this.filter = filter;
    }
    return Instagram;
}());
var instaPhoto = new Instagram("Manual mode", "Black and White");
console.log(instaPhoto);

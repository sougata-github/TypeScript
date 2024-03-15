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

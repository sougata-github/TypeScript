"use strict";
//<> -> generic
Object.defineProperty(exports, "__esModule", { value: true });
function identityAny(val) {
    return val;
}
console.log(identityAny(2));
function identityGeneric(val) {
    return val;
}
console.log(identityGeneric(2));
function logPair(pair) {
    console.log("First: ".concat(pair.first, ", Second: ").concat(pair.second));
}
var stringNumberPair = { first: "Hello", second: 123 };
logPair(stringNumberPair);
var booleanNumberPair = { first: true, second: 123 };
logPair(booleanNumberPair);
//taking an array as parameter
function getArray(list) {
    return list;
}
console.log(getArray(["1", "2", "3"]));
//using arrow functions
var getArrayFirst = function (list) {
    return list[0];
};
console.log(getArrayFirst(["1", "2", "3"]));
function getUser(user1, user2) {
    return {
        user1: user1,
        user2: user2,
    };
}
var user1 = {
    name: "John",
    email: "john@gmail.com",
    age: 22,
};
var user2 = {
    name: "Doe",
    email: "doe@gmail.com",
    age: 24,
};
console.log(getUser(user1, user2));
var ECommerce = /** @class */ (function () {
    function ECommerce() {
        this.cart = [];
    }
    ECommerce.prototype.addToCart = function (product) {
        this.cart.push(product);
    };
    return ECommerce;
}());
var order = new ECommerce();
order.addToCart({
    model: "iPhone 15 pro",
    screenSize: 6.12,
    color: "Black Titanium",
    brand: "Apple",
    operatingSystem: "ios 17",
});
order.addToCart({
    style: "Checked",
    size: "medium",
    color: "Navy Blue",
});
console.log("\n" + "MyCart:");
console.log(order.cart);

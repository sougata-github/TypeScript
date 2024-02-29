"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//without a parameter type it will be marked as any
function addTwo(num) {
    return num + 2;
}
var addedTwo = addTwo(2);
console.log(addedTwo);
//providing a default value
function signUp(name, email, hasPaid) {
    if (hasPaid === void 0) { hasPaid = false; }
    return {
        name: name,
        email: email,
        hasPaid: hasPaid,
    };
}
var user = signUp("Sougata", "test@gmail.com");
console.log(user);
//return value type
function getName(name) {
    return name;
}
var myName = getName("John Doe");
console.log(myName);
var letters = ["a", "b", "c"];
letters.map(function (letter) { return console.log("Letter ".concat(letter)); });
//never type
var fail = function (message) {
    throw new Error(message);
};

"use strict";
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
var booleanObjectPair = {
    first: true,
    second: { name: "John" },
};
logPair(booleanObjectPair);

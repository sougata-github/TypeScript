"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getId(id) {
    if (!id) {
        return "Id not found!";
    }
    return id;
}
console.log(getId(null));
console.log(getId("287283782732abcd"));
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                var s = strs_1[_i];
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
printAll("John Doe");
printAll(["John", "Doe"]);
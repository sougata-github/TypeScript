"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myItems = { item: "🍔", addon: "🍟" };
console.log("MyItems: ".concat(myItems.item, " + ").concat(myItems.addon));
function getId(id) {
    //not allowed
    // id.toUpperCase();
    if (typeof id === "string") {
        return id.toLowerCase();
    }
    return id;
}
console.log(getId("1234"));
console.log(getId(1234));
var numbers = [1, 2, "3"];
console.log(numbers);

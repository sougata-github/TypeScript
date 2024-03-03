"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//using the type
function printCoord(pt) {
    console.log("The value of X coordinate is: ".concat(pt.x, "."));
    console.log("The value of y coordinate is: ".concat(pt.y, "."));
}
printCoord({ x: 100, y: 100 });
var user1 = {
    _id: "1",
    name: "John",
    email: "john@gmail.com",
    //since creditDetails is optional we choose not to include it.
};
console.log(user1);
//not allowed since property is read only
//user1._id = "2";
var user2 = {
    _id: "2",
    name: "Doe",
    email: "doe@gmail.com",
    creditDetails: {
        cardumber: "123",
        carddate: new Date(),
    },
};
console.log(user2);

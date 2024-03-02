"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myObj = {
    name: "John",
    age: 22,
};
console.log(myObj);
//bad behaviour of objects:
function createUser(_a) {
    var name = _a.name, isPaid = _a.isPaid;
    console.log(name);
    console.log(isPaid);
}
//throws an error
//createUser("AAA",true,"something@gmail.com");
//no error
var newUser = { name: "John Doe", isPaid: true, email: "hello@gmail.com" };
createUser(newUser);

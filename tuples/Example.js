"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rgb = [255, 255, 255];
console.log(rgb);
var user2 = ["john doe", 22];
console.log(user2);
//strangely this is allowed:
user2.push(344);
//a good practice would be to make a tuple "readonly".
var user3 = ["john doe", 22];

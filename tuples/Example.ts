const rgb: [number, number, number] = [255, 255, 255];
console.log(rgb);

const user2: [string, number] = ["john doe", 22];
console.log(user2);

//strangely this is allowed:
user2.push(344);

//a good practice would be to make a tuple "readonly".
const user3: readonly [string, number] = ["john doe", 22];
console.log(user3);

//this will now throw an error:
// user3.push(344);

export {};

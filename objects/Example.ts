let myObj: { name: string; age: number } = {
  name: "John",
  age: 22,
};

console.log(myObj);

//bad behaviour of objects:
function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {
  console.log(name);
  console.log(isPaid);
}

//throws an error
//createUser("AAA",true,"something@gmail.com");

//no error
let newUser = { name: "John Doe", isPaid: true, email: "hello@gmail.com" };

createUser(newUser);

export {};

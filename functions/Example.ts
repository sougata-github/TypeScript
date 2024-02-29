//without a parameter type it will be marked as any
function addTwo(num: number) {
  return num + 2;
}

let addedTwo = addTwo(2);
console.log(addedTwo);

//providing a default value
function signUp(name: string, email: string, hasPaid: boolean = false) {
  return {
    name,
    email,
    hasPaid,
  };
}

const user = signUp("Sougata", "test@gmail.com");
console.log(user);

//return value type
function getName(name: string): string {
  return name;
}

let myName = getName("John Doe");
console.log(myName);

const letters = ["a", "b", "c"];

letters.map((letter): void => console.log(`Letter ${letter}`));

//never type
const fail = (message: string): never => {
  throw new Error(message);
};

fail("There was an error!");

export {};

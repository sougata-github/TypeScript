//<> -> generic

function identityAny(val: any): any {
  return val;
}
console.log(identityAny(2));

function identityGeneric<Type>(val: Type): Type {
  return val;
}
console.log(identityGeneric(2));

//custom generic interface
interface Pair<T, U> {
  first: T;
  second: U;
}

function logPair<T, U>(pair: Pair<T, U>): void {
  console.log(`First: ${pair.first}, Second: ${pair.second}`);
}

const stringNumberPair: Pair<string, number> = { first: "Hello", second: 123 };
logPair(stringNumberPair);

const booleanNumberPair: Pair<boolean, number> = { first: true, second: 123 };
logPair(booleanNumberPair);

//taking an array as parameter
function getArray<T>(list: Array<T>): Array<T> {
  return list;
}
console.log(getArray(["1", "2", "3"]));

//using arrow functions
const getArrayFirst = <T>(list: T[]): T => {
  return list[0];
};
console.log(getArrayFirst(["1", "2", "3"]));

//extending a generic type
interface database {
  name: string;
  email: string;
  age: number;
}

function getUser<T extends database, U extends database>(
  user1: T,
  user2: U
): object {
  return {
    user1,
    user2,
  };
}

const user1 = {
  name: "John",
  email: "john@gmail.com",
  age: 22,
};

const user2 = {
  name: "Doe",
  email: "doe@gmail.com",
  age: 24,
};
console.log(getUser(user1, user2));

//generic class
interface Mobile {
  model: string;
  screenSize: number;
  color: string;
  brand: string;
  operatingSystem: string;
}

interface Shirt {
  style: string;
  size: string;
  color: string;
}

class ECommerce<T extends Mobile | Shirt> {
  cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}

const order = new ECommerce();

order.addToCart({
  model: "iPhone 15 pro",
  screenSize: 6.12,
  color: "Black Titanium",
  brand: "Apple",
  operatingSystem: "ios 17",
});

order.addToCart({
  style: "Checked",
  size: "medium",
  color: "Navy Blue",
});

console.log("\n" + "MyCart:");
console.log(order.cart);

export {};

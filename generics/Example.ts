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

const booleanObjectPair: Pair<boolean, { name: string }> = {
  first: true,
  second: { name: "John" },
};
logPair(booleanObjectPair);

export {};

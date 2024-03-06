# TypeScript

TypeScript is a superset of JavaScript, providing type safety and static type checking.

## Statically Typed vs Dynamically Typed Languages

In statically typed languages, the data type of a variable is known at compile time, while in dynamically typed languages, the data type is assigned during runtime by the interpreter, depending on its value.

## Usage of TypeScript

TypeScript is primarily a development tool, where the project still runs JavaScript.

## Syntax

```typescript
let variableName: type = value;
```

## Running TypeScript Programs

To run a `.ts` program, follow these steps:

```bash
tsc fileName.ts
node fileName.js
```

The first step involves transpiling, where the TypeScript compiler (`tsc`) transpiles the TypeScript code to JavaScript. Transpiling is the process of converting the source code from one programming language to another. It is often used in web development, especially with languages like TypeScript and JSX, which are not directly supported by web browsers.

## Primitive Types: String, number, and boolean

In TypeScript, primitive types such as string, number, and boolean are used to represent basic data types.

Note: JavaScript does not have a special runtime value for TypeScript types, so there's no equivalent to "int" or "float" - everything is simply number.

```typescript
let userId: number = 334455;

console.log(userId);
```

However, it's not always necessary to explicitly specify types. In some cases, TypeScript can infer types based on the assigned values. Overusing types can make the code verbose and less readable.

```typescript
let userId = 334455;

console.log(userId);
```

## any

In situations where TypeScript cannot determine or is unsure about the type of a value, it marks the variable as `any`. However, using `any` is discouraged as it disables type checking. It's recommended to specify types explicitly or use the compiler flag `noImplicitAny` to flag implicit `any` types as errors.

```typescript
let hero2;

function getHero2() {
  return true;
}

hero2 = getHero2();

console.log(hero2);

// Specify the type explicitly to avoid such cases:
let hero1: string;
```

## Functions in TypeScript

Type annotations for functions are strong and recommended.

### Syntax

```typescript
function myFunc(param: type): returnType {
  // Function logic
}
```

### Arrow Functions

Arrow functions provide a concise syntax for writing functions.

```typescript
const myFunc = (param: type): returnType => {
  // Function logic
};
```

```typescript
function addTwo(num: number) {
  return num + 2;
}
```

### Providing a Default Value

```typescript
function signUp(name: string, email: string, hasPaid: boolean = false) {
  return {
    name,
    email,
    hasPaid,
  };
}

const user = signUp("MyName", "test@gmail.com");
```

### Return Type Value

```typescript
function getName(name: string): string {
  return name;
}
```

### never

Some functions never return a value. The `never` type represents values that are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.

```typescript
const fail = (message: string): never => {
  throw new Error(message);
};

fail("There was an error!");
```

## Objects

### Assigning type to an object

```typescript
let myObj: { name: string; age: number } = {
  name: "John",
  age: 22,
};

console.log(myObj);
```

### Bad behaviour of objects

When a function is called with an optional parameter, it throws an error. However, if an object with an optional property is created and assigned to a variable, calling the function with that variable does not result in an error.

```typescript
function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {
  console.log(name);
  console.log(isPaid);
}

// Throws an error
createUser({ name: "AAA", isPaid: true, email: "test@gmail.com" });

// No error
let newUser = { name: "John Doe", isPaid: true, email: "hello@gmail.com" };
createUser(newUser);
```

## Type Aliases

Type Aliase is a name for any type. This is convenient, but it's common to want to use the same type more than once and refer to it by a single name.

```typescript
// Mapping over primitive types
type myString = string;

// Defining a type:
type Point = {
  x: number;
  y: number;
};

// Using the type
function printCoord(pt: Point) {
  console.log(`The value of X coordinate is: ${pt.x}.`);
  console.log(`The value of y coordinate is: ${pt.y}.`);
}

printCoord({ x: 100, y: 100 });
```

### Combining types

```typescript
type cardNumber = {
  cardumber: string;
};

type cardDate = {
  carddate: Date;
};

// Combination of the above two types
type cardDetails = cardNumber & cardDate;
```

### readonly & "?"(optional)

`readonly` is used to make a property unchangeable, the value cannot be changed after it is set. `?` marks the property as optional.

```typescript
type User = {
  readonly _id: string;
  name: string;
  email: string;
  creditDetails?: cardDetails;
};

let user1: User = {
  _id: "1",
  name: "John",
  email: "john@gmail.com",
  // Since creditDetails is optional we choose not to include it.
};

console.log(user1);

//user1._id = "2"; -> Not allowed since property is read only

let user2: User = {
  _id: "2",
  name: "Doe",
  email: "doe@gmail.com",
  creditDetails: {
    cardumber: "123",
    carddate: new Date(),
  },
};

console.log(user2);
```

## Arrays

To specify the type of an array like `[1,2,3]`, you can use the syntax `number[]`, this works for any type (e.g. `string[]`).

```typescript
let list1: number[] = [1, 2, 3];
console.log(list1);

// Another syntax:
const list2: Array<Number> = [4, 5, 6];
console.log(list2);

// Array of objects
type User = {
  name: string;
  age: number;
};

const allUsers: User[] = [];

allUsers.push(
  {
    name: "John",
    age: 22,
  },
  {
    name: "Doe",
    age: 23,
  }
);
console.log(allUsers);

// 2D arrays
const matrix: number[][] = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];
console.log(matrix);
```

## Union Type

A union type describes a value that can be one of several types. We use the vertical bar (`|`) to separate each type.

```typescript
type item = "🍔" | "🍕" | "🌭" | "🥪";

type addons = "🍟" | "🥤";

let myItems: { item: item; addon: addons } = { item: "🍔", addon: "🍟" };
console.log(`MyItems: ${myItems.item} + ${myItems.addon}`);
```

```typescript
const numbers: (string | number)[] = [1, 2, "3"];
console.log(numbers);
```

Note: Direct manipulation on individual types is not allowed because TS treats the union type as a new data type.

```typescript
function getId(id: number | string) {
  //not allowed
  //id.toUpperCase();

  if (typeof id === "string") {
    return id.toLowerCase();
  }

  return id;
}

console.log(getId("1234"));
console.log(getId(1234));
```

## Tuples

Tuples are typed arrays of pre-defined length and types for each index. The order of data type in each index should be maintained.

```typescript
const rgb: [number, number, number] = [255, 255, 255];
console.log(rgb);

const user2: [string, number] = ["john doe", 22];
console.log(user2);
```

Strangely, array methods are allowed on tuples that violate type safety, so a good practice would be to make a tuple "readonly".

```typescript
user2.push(344);

const user3: readonly [string, number] = ["john doe", 22];
// this will now throw an error:
user3.push(344);
```

## Enums

A special class that represents a group of constants, can be string or numeric.

```typescript
enum MEMBER_ROLE {
  ADMIN = "admin",
  MODERATOR = "moderator",
  GUEST = "guest",
}

const memberRole = MEMBER_ROLE.GUEST;
console.log(memberRole);
```

First value is initialised to 0 by default then 1 is added to each additional value.

```typescript
const enum ZERO_ONE {
  ZERO,
  ONE,
}

const zero = ZERO_ONE.ZERO;
console.log(zero);

const one = ZERO_ONE.ONE;
console.log(one);
```

We can also set the value and have it auto increment from that.

```typescript
const enum TWO_THREE {
  TWO = 2,
  THREE,
}

const two = TWO_THREE.TWO;
console.log(two);

const three = TWO_THREE.THREE;
console.log(three);
```

Or we can initialise all the values.

```typescript
const enum HUNDREDS {
  ONE = 100,
  TWO = 200,
  THREE = 300,
}

const oneHundred = HUNDREDS.ONE;
console.log(oneHundred);
```

## Interfaces

Used to define shape/structure of objects. Interfaces are similar to type aliases, except they only apply to object types.

```typescript
interface rectangle {
  height: number;
  width: number;
  area?: () => number;
}

//rect1 adheres to interface rectangle.
const rect1: rectangle = {
  height: 1.5,
  width: 2.5,
};
console.log(rect1);

const rect2: rectangle = {
  height: 2,
  width: 4,
  area: function () {
    return this.height * this.width;
  },
};

const areaOfRectangle = rect2.area ? rect2.area() : "Area cannot be computed";
console.log(areaOfRectangle);
```

Interfaces can extend each other's definition. Extending simply means you are creating a new interface with same properties as that of the original interface, plus something new.

```typescript
interface coloredRectangle extends rectangle {
  color: string;
}

const coloredRect: coloredRectangle = {
  height: 2.5,
  width: 4.5,
  color: "green",
};
console.log(coloredRect);
```

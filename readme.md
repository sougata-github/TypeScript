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

Union types are used when a value can be more than a single type. We use the vertical bar (`|`) to separate each type.

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

Array methods are allowed on tuples that violate type safety, so a good practice would be to make a tuple "readonly".

```typescript
//strangely this is allowed:
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
  area?(): number;
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

## Interfaces vs Types

### Declaration Syntax

Type: Types can be used to define simple types, union types, intersection types, and more.

```typescript
type MyType = number | string;
```

Interface: Interfaces are typically used for defining object shapes.

```typescript
interface MyInterface {
  prop1: number;
  prop2: string;
}
```

### Extending/Implementing

Type: Types can be used to create union or intersection types, but they cannot be extended or implemented.

```typescript
type A = { prop: number };
type B = { prop: string };

type C = A & B; // Intersection type
```

Interface: Interfaces can extend other interfaces and can be implemented by classes.

```typescript
interface A {
  prop1: number;
}

interface B {
  prop2: string;
}

interface C extends A, B {} // Extending interfaces
```

### Declaration Merging

Type: Types don't support declaration merging.

```typescript
type MyType = { prop1: number };
type MyType = { prop2: string }; // Error: Duplicate identifier 'MyType'.
```

Interface: Interfaces support declaration merging, which means you can declare an interface multiple times, and their members will be merged.

```typescript
interface MyInterface {
  prop1: number;
}

interface MyInterface {
  prop2: string;
}

const MyObj: MyInterface = { prop1: 1, prop2: "1" }; // Valid
```

## Setting up TypeScript for projects (Node.js)

### Create `tsconfig.json` file

```bash
tsc --init
```

`tsconfig.json` is a configuration file used by the TypeScript compiler (tsc) to specify compiler options and project settings for a TypeScript project. This file allows developers to define various settings such as compilation target, module system, output directory, and more.

### Initialise Node Package Manager

```bash
npm init -y
```

### Create `dist` and `src` folders.

### Create `index.html` file and make it point to `index.js` in the `dist` folder by adding a script tag.

### Create `index.ts` in the `src` folder.

### Specify output directory in `tsconfig.json`

```json
"outDir": "./dist"
```

All TypeScript files will be transpiled to JavaScript files with the same name as the TypeScript files and stored in the `dist` directory.

### Add content to your `.ts` file.

### Compile and run `.ts` file.

```bash
tsc -w
```

This command runs TypeScript files in "watch mode", allowing the compiler to detect changes and recompile automatically.

## Classes in TypeScript

TypeScript offers full support for the class keyword introduced in ES2015.

### Here’s the most basic class - an empty one:

```typescript
class Empty {}
```

### Fields

A field declaration creates a `public` writeable property on a class.

```typescript
class Point {
  x = 0;
  y = 0;
}

const pt = new Point();
console.log(pt);

class User {
  //All fields are marked 'public' by default
  email: string;
  name: string;
  age: number;

  /*Fields may be prefixed with the `readonly` modifier. 
  This prevents assignments to the field outside of the constructor.*/
  readonly role: string = "GUEST";

  constructor(email: string, name: string = "Username", age: number) {
    this.email = email;
    this.name = name;
    this.age = age;
  }
}

const user1 = new User("test@gmail.com", "John Doe", 22);

//cannot change property "role" since readonly:
//user1.role="ADMIN" -> not allowed

console.log(user1);
```

### Getters & Setters

- A getter method returns the value of the property’s value. A getter is also called an accessor.

- A setter method updates the property’s value. A setter is also known as a mutator.

- A getter method starts with the keyword `get` and a setter method starts with the keyword `set`.

Note: A set accessor cannot have a return type annotation.

```typescript
class Rectangle {
  height: number;
  width: number;

  private color: string = "";

  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
  }

  get area(): number {
    return Number((this.height * this.width).toFixed(2));
  }

  get rectColor(): string {
    return this.color;
  }

  set rectColor(color: string) {
    if (color === "black" || color === "white") {
      throw new Error("Color not valid.");
    }
    this.color = color;
  }
}

const rectangle = new Rectangle(2.2, 4.2);

rectangle.rectColor = "green";

console.log("Area: " + rectangle.area + ".");
console.log("Color: " + rectangle.rectColor + ".");

console.log(rectangle);
```

### Interfaces can be implemented by classes.

```typescript
interface TakePhoto {
  photoMode: string;
  filter: string;
}

class Instagram implements TakePhoto {
  photoMode: string;
  filter: string;
  constructor(photoMode: string, filter: string) {
    this.photoMode = photoMode;
    this.filter = filter;
  }
}

const instaPhoto = new Instagram("Manual mode", "B/W");
console.log(instaPhoto);
```

### Inheritance

It is the mechanism in which one class derives the properties of another class. In TypeScript a base class inherits a parent class using the `extends` keyword.

- `private` keyword: private access modifier makes the field only accesssible inside a class.

- `protected` keyword: protected members are only visible to subclasses of the class they’re declared in.

- `super` keyword: It allows us to invoke constructor of parent class, call parent class methods within a subclass. The `super` keyword is useful for overriding and extending the behavior of methods defined in a parent class, especially when those methods are not declared as `private`.

Note: Constructors for derived class must contain a `super` call. Super must be called before accessing `this` in the constructor of a derived class.

```typescript
class Family {
  public name: string;
  protected role: string | undefined;
  private access: boolean | undefined;

  constructor(name: string) {
    this.name = name;
  }

  protected setAccess() {
    if (this.role === "parent") {
      this.access = true;
    } else {
      this.access = false;
    }
  }

  family(): void {
    console.log("I belong to this family.");
  }
}

class Parent extends Family {
  constructor(name: string) {
    super(name);
    this.role = "parent"; //"role" from Family class. (couldn't have accessed if it was private)
    this.setAccess();
  }

  family(): void {
    super.family();
    console.log("I am a Parent and I have access.");
  }
}

const parent1 = new Parent("John");
parent1.family();
console.log(parent1);

class Child extends Family {
  constructor(name: string) {
    super(name);
    this.role = "child";
    this.setAccess();
  }

  family(): void {
    super.family();
    console.log("I am a Child and I don't have access.");
  }
}

const child1 = new Child("Doe");
child1.family();
console.log(child1);
```

### Abstract classes

Define an abstract class in Typescript using the `abstract` keyword. Abstract classes are mainly for inheritance where other classes may derive from them. We cannot create an instance of an abstract class.

An abstract class typically includes one or more abstract methods or property declarations. The class which extends the abstract class must define all the abstract methods.

```typescript
abstract class Animal {
  type: string;
  constructor(type: string) {
    this.type = type;
  }

  //regular method -> has to be implemented when declared.
  animalType(): void {
    console.log(`${this.type}.`);
  }

  //abstract method -> can be only implemented in the child class.
  abstract animalSound(): string;
}

class Dog extends Animal {
  breed: string;
  constructor(type: string, breed: string) {
    super(type);
    this.breed = breed;
  }

  animalSound(): string {
    return "Woof! Woof!";
  }
}

const dog = new Dog("Mammal", "Husky");
const dogSound = dog.animalSound();
dog.animalType();
console.log(dog);
console.log(dogSound);
```

## Generics

Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.

They allow you to create reusable components (such as functions, classes, or interfaces) that can work with any data type while still providing type safety.

```typescript
function identityAny(val: any): any {
  return val;
}
console.log(identityAny(2));

//While using any is certainly generic in that it will cause the function to accept any and all types for the type of arg, we actually are losing the information about what that type was when the function returns. If we passed in a number, the only information we have is that any type could be returned.

function identityGeneric<Type>(val: Type): Type {
  return val;
}
console.log(identityGeneric(2));

//Instead, we need a way of capturing the type of the argument in such a way that we can also use it to denote what is being returned. Here, we will use a type variable, a special kind of variable that works on types rather than values.
```

### Custom generic interface

```typescript
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

// When you define a generic type or interface like Pair<T, U>, T and U are placeholders for the actual types that will be used when instances of Pair are created. This allows you to create instances of Pair with different types for the first and second properties without having to define a separate interface for each combination of types.
```

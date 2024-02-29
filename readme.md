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

Example:

```typescript
let userId: number = 334455;

console.log(userId);
```

However, it's not always necessary to explicitly specify types. In some cases, TypeScript can infer types based on the assigned values. Overusing types can make the code verbose and less readable.

Example:

```typescript
let userId = 334455;

console.log(userId);
```

## any Type

In situations where TypeScript cannot determine or is unsure about the type of a value, it marks the variable as `any`. However, using `any` is discouraged as it disables type checking. It's recommended to specify types explicitly or use the compiler flag `noImplicitAny` to flag implicit `any` types as errors.

Example:

```typescript
let hero;

function getHero() {
  return true;
}

hero = getHero();

<<<<<<< HEAD
console.log(hero2);

// Specify the type explicitly to avoid such cases:
let hero1: string;
=======
console.log(hero);
```

In these types of situations, specify the type explicitly to avoid such cases:

```typescript
let hero: string;
>>>>>>> 9b687080fe382162418e63d486422fea3ce43928
```

## Functions in TypeScript (Basics)

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

### Example: Basic Function

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

### never Type

Some functions never return a value. The `never` type represents values that are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.

Example:

```typescript
const fail = (message: string): never => {
  throw new Error(message);
};

fail("There was an error!");
```

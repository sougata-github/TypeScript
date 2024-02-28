# TypeScript Introduction

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

## Any Type

In situations where TypeScript cannot determine or is unsure of the value produced, it marks the variable as `any`. The `any` type is not a special type; it is simply a marker that turns off type checking.

Note: Avoid using `any` because it isn't type-checked. Use the compiler flag "noImplicitAny" to flag any implicit "any" as an error.

Example:

```typescript
let hero2;

function getHero2() {
  return true;
}

hero2 = getHero2();

console.log(hero2);
```

In these types of situations, specify the type explicitly to avoid such cases:

```typescript
let hero1: string;
```

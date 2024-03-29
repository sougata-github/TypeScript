function getId(id: string | null): string {
  if (!id) {
    return "Id not found!";
  }
  return id;
}

console.log(getId(null));
console.log(getId("287283782732abcde"));

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

printAll("John Doe");
printAll(["John", "Doe"]);

console.log("\n");

//'in' operator
interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape): number {
  if ("size" in shape) {
    return shape.size * shape.size;
  } else {
    return shape.width * shape.height;
  }
}

const square: Square = { kind: "square", size: 5 };
const rectangle: Rectangle = { kind: "rectangle", width: 6, height: 4 };

console.log(calculateArea(square));
console.log(calculateArea(rectangle));

console.log("\n");

//'instanceof' operator
class Car {
  drive(): void {
    console.log("Driving a car.");
  }
}

class Bicycle {
  ride(): void {
    console.log("Riding the bicycle.");
  }
}

function move(vehicle: Car | Bicycle) {
  if (vehicle instanceof Car) {
    vehicle.drive();
  } else if (vehicle instanceof Bicycle) {
    vehicle.ride();
  } else {
    console.log("Unknown vehicle type.");
  }
}

const car = new Car();
const bicyle = new Bicycle();

move(car);
move(bicyle);

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

logValue("Sunday, 25th Dec");
logValue(new Date());

console.log("\n");

//type predicate
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function feedPet(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim();
    console.log("Fish food");
  } else {
    pet.fly();
    console.log("Bird food");
  }
}
const myFish: Fish = { swim: () => console.log("Fish is swimming") };
const myBird: Bird = { fly: () => console.log("Bird is flying") };

feedPet(myFish);
feedPet(myBird);

console.log("\n");

//discriminated union & exhaustive checking
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square2 {
  kind: "square";
  side: number;
}

type Shape2 = Circle | Square2;

function getShape(shape: Shape2): string {
  if (shape.kind === "circle") {
    return "Circle";
  }
  return "Square";
}

function getArea(shape: Shape2): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side * shape.side;
    default:
      const _defaultShape: never = shape;
      return _defaultShape;
  }
}

const circle: Circle = {
  kind: "circle",
  radius: 2,
};

const square2: Square2 = {
  kind: "square",
  side: 5,
};

console.log(getShape(circle));
console.log(getShape(square2));

console.log(Number(getArea(circle).toFixed(2)));
console.log(Number(getArea(square2).toFixed(2)));

export {};

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

export {};

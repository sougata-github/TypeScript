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

export {};

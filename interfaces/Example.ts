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

//Interfaces can extend each other's definition.
interface coloredRectangle extends rectangle {
  color: string;
}

const coloredRect: coloredRectangle = {
  height: 2.5,
  width: 4.5,
  color: "green",
};
console.log(coloredRect);

//declaration merging:
// Interfaces support declaration merging, which means you can declare an interface multiple times, and their members will be merged.
interface MyInterface {
  prop1: number;
}

interface MyInterface {
  prop2: string;
}

const MyObj: MyInterface = { prop1: 1, prop2: "1" }; // Valid
console.log(MyObj);

export {};

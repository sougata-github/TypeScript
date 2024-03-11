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

export {};

//mapping over primitive types
type myString = string;

//defining a type:
type Point = {
  x: number;
  y: number;
};

//using the type
function printCoord(pt: Point) {
  console.log(`The value of X coordinate is: ${pt.x}.`);
  console.log(`The value of y coordinate is: ${pt.y}.`);
}

printCoord({ x: 100, y: 100 });

//combining types
type cardNumber = {
  cardumber: string;
};

type cardDate = {
  carddate: Date;
};

//a combination of the above two types
type cardDetails = cardNumber & cardDate;

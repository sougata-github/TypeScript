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

//combination of the above two types
type cardDetails = cardNumber & cardDate;

//readonly and optional
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
  //since creditDetails is optional we choose not to include it.
};

console.log(user1);

//not allowed since property is read only
//user1._id = "2";

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

export {};

let list1: number[] = [1, 2, 3];
console.log(list1);

//another syntax:
const list2: Array<Number> = [4, 5, 6];
console.log(list2);

//array of objects
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

//2d arrays
const matrix: number[][] = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];
console.log(matrix);

export {};

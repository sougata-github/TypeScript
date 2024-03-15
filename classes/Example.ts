class Point {
  x = 0;
  y = 0;
}

const pt = new Point();
console.log(pt);

class User {
  email: string;
  name: string;
  age: number;

  readonly role: string = "GUEST";

  private password: string;

  constructor(
    email: string,
    name: string = "Username",
    age: number,
    password: string
  ) {
    this.email = email;
    this.name = name;
    this.age = age;
    this.password = password;
  }
}

const user1 = new User("test@gmail.com", "John Doe", 22, "12345");

console.log(user1);

export {};

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

//inheritance and "protected keyword"

class Parent {
  public name: string;
  private access: boolean;
  protected role: string = "parent";
}

class Child extends Parent {
  protected role = "child";
}

const child = new Child();

child.name = "John";
console.log(child);

//interfaces can be implemented by classes

interface TakePhoto {
  photoMode: string;
  filter: string;
}

class Instagram implements TakePhoto {
  photoMode: string;
  filter: string;
  constructor(photoMode: string, filter: string) {
    this.photoMode = photoMode;
    this.filter = filter;
  }
}

const instaPhoto = new Instagram("Manual mode", "B/W");
console.log(instaPhoto);

export {};

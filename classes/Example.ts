class Point {
  x = 0;
  y = 0;
}

const pt = new Point();
console.log(pt, "\n");

class User {
  email: string;
  name: string;
  age: number;
  readonly role: string = "GUEST";

  constructor(email: string, name: string = "Username", age: number) {
    this.email = email;
    this.name = name;
    this.age = age;
  }
}

const user1 = new User("test@gmail.com", "John Doe", 22);

console.log(user1, "\n");

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

const instaPhoto = new Instagram("Manual mode", "Black and White");
console.log(instaPhoto);

export {};

abstract class Animal {
  type: string;
  constructor(type: string) {
    this.type = type;
  }

  animalType(): void {
    console.log(`${this.type}.`);
  }

  abstract animalSound(): string;
}

class Dog extends Animal {
  breed: string;
  constructor(type: string, breed: string) {
    super(type);
    this.breed = breed;
  }

  animalSound(): string {
    return "Woof! Woof!";
  }
}

const dog = new Dog("Mammal", "Husky");
const dogSound = dog.animalSound();
dog.animalType();
console.log(dog);
console.log(dogSound);

export {};

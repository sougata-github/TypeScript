class Family {
  public name: string;
  protected role: string;
  private access: boolean;

  constructor(name: string) {
    this.name = name;
  }

  protected setAccess() {
    if (this.role === "parent") {
      this.access = true;
    } else {
      this.access = false;
    }
  }

  family(): void {
    console.log("I belong to this family.");
  }
}

class Parent extends Family {
  constructor(name: string) {
    super(name);
    this.role = "parent"; //"role" from Family class. (couldn't have accessed if it was private)
    this.setAccess();
  }

  family(): void {
    super.family();
    console.log("I am a Parent and I have access.");
  }
}

const parent1 = new Parent("John");
parent1.family();
console.log(parent1, "\n");

class Child extends Family {
  constructor(name: string) {
    super(name);
    this.role = "child";
    this.setAccess();
  }

  family(): void {
    super.family();
    console.log("I am a Child and I don't have access.");
  }
}

const child1 = new Child("Doe");
child1.family();
console.log(child1, "\n");

function getId(id: string | null): string {
  if (!id) {
    return "Id not found!";
  }

  return id;
}

console.log(getId(null));
console.log(getId("287283782732abcd"));

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

printAll("John Doe");
printAll(["John", "Doe"]);

export {};

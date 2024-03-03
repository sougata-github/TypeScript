type item = "🍔" | "🍕" | "🌭" | "🥪";

type addons = "🍟" | "🥤";

let myItems: { item: item; addon: addons } = { item: "🍔", addon: "🍟" };
console.log(`MyItems: ${myItems.item} + ${myItems.addon}`);

function getId(id: number | string) {
  //not allowed
  //id.toUpperCase();

  if (typeof id === "string") {
    return id.toLowerCase();
  }

  return id;
}

console.log(getId("1234"));
console.log(getId(1234));

const numbers: (string | number)[] = [1, 2, "3"];
console.log(numbers);

export {};

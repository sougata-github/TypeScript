enum MEMBER_ROLE {
  ADMIN = "admin",
  MODERATOR = "moderator",
  GUEST = "guest",
}

const memberRole = MEMBER_ROLE.GUEST;
console.log(memberRole);

//first value is initialised to 0 by default then 1 is added to each additional value.
const enum ZERO_ONE {
  ZERO,
  ONE,
}

const zero = ZERO_ONE.ZERO;
console.log(zero);

const one = ZERO_ONE.ONE;
console.log(one);

//we can also set the value and have it auto increment from that.
const enum TWO_THREE {
  TWO = 2,
  THREE,
}

const two = TWO_THREE.TWO;
console.log(two);

const three = TWO_THREE.THREE;
console.log(three);

//initialising all the values
const enum HUNDREDS {
  ONE = 100,
  TWO = 200,
  THREE = 300,
}

const oneHundred = HUNDREDS.ONE;
console.log(oneHundred);

export {};

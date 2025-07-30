const numbers: number[] = [1, 2, 3, 4, 5];
const employees: string[] = ["Natanael", "Uriel", "Samael", "Ismael"];
const testNumbers: (number | string)[] = [1, "um", 2, "dois"];

type Tribe = "Mage" | "Warrior";

interface User {
  nickname: string;
  lvl: number;
  class: Tribe;
}

const users: User[] = [
  { nickname: 'nickolov', lvl: 100, class: "Warrior" },
  { nickname: 'Bach', lvl: 92, class: "Mage" },
  { nickname: 'Samael', lvl: 1000, class: "Mage" }
];

const totalUsers = users.map(user => {return user});

console.log(totalUsers);

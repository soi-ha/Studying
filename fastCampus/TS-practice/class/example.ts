class Person {
  name: string = "mark";
  age!: number;

  constructor(age?: number) {
    if (age === undefined) {
      this.age = 20;
    } else {
      this.age = age;
    }
  }

  async init() {

  }
}

const p1 = new Person(39);
await p1.init();
const p2 = new Person();

console.log(p1)
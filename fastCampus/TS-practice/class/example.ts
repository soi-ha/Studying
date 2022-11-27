class Person {
  public name: string = "mark";
  private age!: number;

  public constructor(age?: number) {
    if (age === undefined) {
      this.age = 20;
    } else {
      this.age = age;
    }
  }

  public async init() {}
}

const p1 = new Person(39);
console.log(p1)
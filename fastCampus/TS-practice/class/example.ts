class Person {
  public constructor(private _name: string, public age: number) {}

  get name() {
    return this._name + " Lee";
  }

  set name(n: string) {
    this._name = n;
  }
}

const p1 = new Person("mark",39);
console.log(p1.name) // get을 하는 함수 getter
p1.name = "Jin"; // set을 하는 함수 setter
console.log(p1.name) 

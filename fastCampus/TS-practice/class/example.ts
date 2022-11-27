class Person {
  public readonly name: string = "Mark"
  private readonly country: string = "Korea"

  public constructor(private _name: string, public age: number) {}

  hello() {
    this.country = "China";
  }
}

const p1 = new Person("Mark",39);
console.log(p1.name) // get을 하는 함수 getter
p1.name = "Jin"; // set을 하는 함수 setter
console.log(p1.name) 

class Person<T, K> {
  private _name: T;
  private _age: K;


  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}

new Person("mark", 29); // string
// new Person<string, number>("Ban","Kan"); // error
// new Person<string>(29); // error
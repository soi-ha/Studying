class Person<T> {
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new Person("mark"); // string
// new Person<string>(29); // error
"use strict";
class Person {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        return this._name + " Lee";
    }
    set name(n) {
        this._name = n;
    }
}
const p1 = new Person("mark", 39);
console.log(p1.name); // get을 하는 함수 getter
p1.name = "Jin"; // set을 하는 함수 setter
console.log(p1.name);

"use strict";
class Person {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
        this.name = "Mark";
        this.country = "Korea";
    }
}
const p1 = new Person("Mark", 39);
console.log(p1.name); // get을 하는 함수 getter
// p1.name = "Jin"; // set을 하는 함수 setter
console.log(p1.name);

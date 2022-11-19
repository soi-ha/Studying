"use strict";
const p41 = {
    name: 'Mark',
    age: 39,
    hello: function () {
        console.log(`안녕하세요! ${this.name}입니다.`);
    },
};
const p42 = {
    name: 'Mark',
    age: 39,
    hello() {
        console.log(`안녕하세요! ${this.name}입니다.`);
    },
};
// const p43: Person4 = {
//   name: 'Mark',
//   age: 39,
//   hello: () void => {
//     console.log(`안녕하세요! ${this.name}입니다.`)
//   },
// }
p41.hello();
p42.hello();

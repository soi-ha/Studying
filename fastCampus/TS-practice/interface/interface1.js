"use strict";
function hello1(person) {
    console.log(`안녕하세요! ${person.name}입니다.`);
}
const p1 = {
    name: 'Mark',
    age: 39,
};
hello1(p1);

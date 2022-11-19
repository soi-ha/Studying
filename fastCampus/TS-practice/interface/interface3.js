"use strict";
function hello3(person) {
    console.log(`안녕하세요! ${person.name}입니다.`);
}
const p31 = {
    name: 'Mark',
    age: 39,
};
const p32 = {
    name: 'Anna',
    sister: ['Sung', 'Chan'],
};
const p33 = {
    name: 'Bromang',
    father: p31,
    mother: p32,
};

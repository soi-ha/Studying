"use strict";
class Person3 {
    hello() {
        console.log("hello~?", Person3.CITY);
    }
    change() {
        Person3.CITY = "Suwon";
    }
}
Person3.CITY = 'Seoul';
const p3 = new Person3();
p3.hello();
const p4 = new Person3();
p4.hello();
p3.change(); // 값 변경하기
p4.hello(); // 변경된 값 다시 호출

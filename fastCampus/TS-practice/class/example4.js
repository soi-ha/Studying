"use strict";
class ClassName {
    static getInstance() {
        // ClassName으로부터 만든 object가 있으면, 리턴
        // ClassName으로부터 만든 object가 없으면, 생성
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }
        return ClassName.instance;
    }
    constructor() { }
}
ClassName.instance = null;
const aa = ClassName.getInstance(); // 최초로 불리기에 object 생성
const bb = ClassName.getInstance(); // 생성이 되어 있기에 그냥 리턴
console.log(aa === bb);

// class => object
// {mark: "male", jade: "male"}
// {chloe: "female", alex: "male", anna: "female"}

class Students {
  [index: string]: string;
  // [index: string]: "male" | "female"; 
  // 위 코드가 조금 더 정확하다. 두 가지 값만 올 수 있도록 하기 때문이다.

  mark: "male" = "male"; // mark가 모든 반에 항상 존재할 때 
}

const a = new Students;
a.mark = 'male';
a.jade = 'male';

console.log(a);

const b = new Students;
b.chloe = 'female';
b.alex = 'male';
b.anna = 'female';

console.log(b);
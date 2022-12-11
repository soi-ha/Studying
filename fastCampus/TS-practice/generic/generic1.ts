function helloString(message: string): string {
  return message
}

function helloNumber(message: number): number {
  return message
}

// 더 많이 반복되는 함수들

function hello(message: any): any {
  return message
}

console.log(hello("Mark"));
console.log(hello(19));

// Generic

function helloGeneric<T>(message: T): T {
  return message
}

console.log(helloGeneric("Mark")); // "Mark"
console.log(helloGeneric("Mark").length); // number로 인식. String.length
console.log(helloGeneric(19)); // 19
console.log(helloGeneric(19).length); // number로 인식했기 때문에 length 사용 불가
console.log(helloGeneric(true)); // true
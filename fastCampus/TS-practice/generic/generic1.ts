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
interface IPerson {
  name: string;
  age: number;
}

const per: IPerson = {
  name: "Mark",
  age: 19,
}

// type Keys = keyof IPerson;
// const keys: Keys = "name";

function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

// getProp의 결과물
getProp(per ,'name'); // string
getProp(per, 'age') // numner

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

// setProp(per, "name", 39) // name과 맞지 않는 타입이기에 error
setProp(per, "name", "Anna") // 맞는 타입이기에 값 변경 완료. value는 string이 됨.

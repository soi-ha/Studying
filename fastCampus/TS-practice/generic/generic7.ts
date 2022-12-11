interface IPerson {
  name: string;
  age: number;
}

const IPer: IPerson = {
  name: "Mark",
  age: 19,
}

// type Keys = keyof IPerson;
// const keys: Keys = "name";

// getProp의 결과물
// IPerson[keyof IPerson] 
// =>IPerson[”name” | “age”] 
// => IPerson[”name”] | IPerson[”age”]
// => string | number
function getProp(obj: IPerson, key: keyof IPerson): IPerson[keyof IPerson] {
  return obj[key]
}

function setProp(obj: IPerson, key: keyof IPerson, value: string | number): void {
  obj[key] = value;
}

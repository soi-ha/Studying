function helloArray<T>(message: T[]): T {
  return message[0]
}

helloArray(['Hello','Array']); // "Hello"
helloArray(['Hello', 5]); // string이거나 number?

function helloTuple<T, K>(message: [T, K]): T {
  return message[0];
}

helloTuple(['Hello','Array']); // string
helloTuple(['Hello',5]); // 0번째 index는 string
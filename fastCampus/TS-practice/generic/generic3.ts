function helloArray<T>(message: T[]): T {
  return message[0]
}

helloArray(['Hello','Array']); // "Hello"
helloArray(['Hello', 5]); // string이거나 number?

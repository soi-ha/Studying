function helloBasic<T, U>(message: T, comment: U): T {
  return message;
}

helloBasic<string, number>('number', 19); // string
// helloBasic<string>(19); // error

helloBasic(36, 19); // 36
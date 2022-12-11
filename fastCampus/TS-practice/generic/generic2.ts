function helloBasic<T>(message: T): T {
  return message;
}

helloBasic<string>('number'); // string
// helloBasic<string>(19); // error

helloBasic(36); // 36
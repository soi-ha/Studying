export class Money {
  #money;

  constructor(money) {
    this.#money = money;
    this.#validate(money);
  }

  #validate(money) {
    if (money % 1000 !== 0) {
      throw new Error('[ERROR] 1,000원 단위만 구매가 가능합니다.');
    }
  }
}

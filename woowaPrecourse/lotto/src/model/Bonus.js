export class Bonus {
  #number;
  #winning;

  constructor(number, winning) {
    this.#number = number;
    this.#winning = winning;
    this.#validate(number, winning);
  }

  #validate(number, winning) {
    this.#validateRangeNumber(number);
    this.#validateCheckWinningDuplication(number, winning);
  }

  #validateRangeNumber(number) {
    const REGEX = /^(?:[1-9]|[1-3][0-9]|4[0-5])$/;
    if (!REGEX.test(number)) {
      throw new Error(
        '[ERROR] 보너스 번호는 1부터 45 사이의 하나의 숫자여야 합니다.',
      );
    }
  }

  #validateCheckWinningDuplication(number, winning) {
    winning.forEach((win) => {
      if (win === number) {
        throw new Error(
          '[ERROR] 당첨 번호와 중복된 번호는 입력할 수 없습니다.',
        );
      }
    });
  }
}

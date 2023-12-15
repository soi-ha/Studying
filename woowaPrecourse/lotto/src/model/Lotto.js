class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateCheckNumber(numbers);
    this.#validateRangeNumber(numbers);
    this.#validateCheckDuplication(numbers);
  }

  #validateCheckNumber(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 당첨 번호는 6개여야 합니다.');
    }
  }

  #validateRangeNumber(numbers) {
    const REGEX = /^(?:[1-9]|[1-3][0-9]|4[0-5])$/;
    const filterNumbers = numbers.filter((num) => {
      return REGEX.test(num);
    });

    if (filterNumbers.length !== numbers.length) {
      throw new Error('[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  }

  #validateCheckDuplication(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 중복된 숫자는 입력이 불가능합니다.');
    }
  }
}

export default Lotto;

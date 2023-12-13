export class PickNumber {
  #number;

  constructor(number) {
    this.#number = number;
    this.#validate(number);
  }

  #validate(number) {
    this.#validateNumber(number);
    this.#validateDuplication(number);
  }

  #validateNumber(number) {
    const REGEX = /^[1-9]\d{2}$/;
    const filterResult = REGEX.test(number);
    if (!filterResult) {
      throw new Error('[ERROR] 3자리의 숫자를 입력해야 합니다.');
    }
  }

  #validateDuplication(number) {
    if (new Set(number).size !== number.length) {
      throw new Error('[ERROR] 중복된 숫자가 존재합니다.');
    }
  }
}

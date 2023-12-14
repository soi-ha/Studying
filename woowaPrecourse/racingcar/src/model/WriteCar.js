export class WriteCar {
  #name;

  constructor(name) {
    this.#name = name;
    this.#validate(name);
  }

  #validate(name) {
    this.#validateFormat(name);
    this.#validateNumber(name);
    this.#validateDuplication(name);
  }

  #validateFormat(name) {
    const REGEX = /^[0-9a-zA-Z가-힣]{1,5}$/;
    const filterResult = name.filter((value) => {
      return REGEX.test(value);
    });

    if (filterResult.length !== name.length) {
      throw new Error('[ERROR] 잘못된 입력 형식입니다.');
    }
  }

  #validateNumber(name) {
    if (name.length < 2) {
      throw new Error('[ERROR] 최소 2개 이상의 이름을 입력해야 합니다.');
    }
  }

  #validateDuplication(name) {
    if (new Set(name).size !== name.length) {
      throw new Error('[ERROR] 중복된 이름은 사용할 수 없습니다.');
    }
  }
}

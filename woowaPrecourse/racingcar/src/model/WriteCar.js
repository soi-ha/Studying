export class WriteCar {
  #name;

  constructor(name) {
    this.#name = name;
    const nameList = name.split(',');

    this.#validate(nameList);
  }

  #validate(nameList) {
    this.#validateFormat(nameList);
    this.#validateNumber(nameList);
    this.#validateDuplication(nameList);
  }

  #validateFormat(nameList) {
    const REGEX = /^[0-9a-zA-Z가-힣]{1,5}$/;
    const filterResult = nameList.filter((value) => {
      return REGEX.test(value);
    });

    if (filterResult.length !== nameList.length) {
      throw new Error('[ERROR] 잘못된 입력 형식입니다.');
    }
  }

  #validateNumber(nameList) {
    if (nameList.length < 2) {
      throw new Error('[ERROR] 최소 2개 이상의 이름을 입력해야 합니다.');
    }
  }

  #validateDuplication(nameList) {
    if (new Set(nameList).size !== nameList.length) {
      throw new Error('[ERROR] 중복된 이름은 사용할 수 없습니다.');
    }
  }
}

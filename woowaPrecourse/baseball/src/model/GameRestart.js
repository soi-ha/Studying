export class GameRestart {
  #number;

  constructor(number) {
    this.#number = number;
    this.#validate(number);
  }

  #validate(number) {
    if (number !== 1 && number !== 2) {
      throw new Error('[ERROR] 1 또는 2만 입력이 가능합니다.');
    }
  }
}
